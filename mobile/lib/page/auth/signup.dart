import 'package:app/utils.dart';
import 'package:flutter/material.dart';
import 'package:flutter/gestures.dart';

// Pub
import 'package:firebase_auth/firebase_auth.dart';
import 'package:email_validator/email_validator.dart';

// Data
import 'package:app/data/database.dart';

class SignUpPage extends StatefulWidget {
  final Function() onClickedSignIn;

  const SignUpPage({
    super.key,
    required this.onClickedSignIn,
  });

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  final GlobalKey<FormState> formKey = GlobalKey<FormState>();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController passwordRepeatController = TextEditingController();
  
  bool passwordVisibility = false;

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    passwordRepeatController.dispose();

    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      resizeToAvoidBottomInset: false,
      body: Form(
        key: formKey,
        child: Padding(
          padding: const EdgeInsets.all(32),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              TextFormField(
                controller: emailController,
                textInputAction: TextInputAction.next,
                decoration: const InputDecoration(
                  hintText: "Email",
                ),
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (email) => email != null && !EmailValidator.validate(email)
                  ? "Enter a valid email"
                  : null,
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: passwordController,
                textInputAction: TextInputAction.next,
                obscureText: !passwordVisibility,
                decoration: InputDecoration(
                  hintText: "Password",
                    suffixIcon: IconButton(
                    onPressed: () => setState(() => passwordVisibility = !passwordVisibility),
                    icon: passwordVisibility
                      ? const Icon(Icons.visibility)
                      : const Icon(Icons.visibility_off),
                  ),
                ),
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (password) => password != null && password.length < 6
                  ? "Enter min. 6 characters"
                  : null,
              ),
              const SizedBox(height: 16),
              TextFormField(
                controller: passwordRepeatController,
                textInputAction: TextInputAction.done,
                obscureText: !passwordVisibility,
                decoration: InputDecoration(
                  hintText: "Repeat Password",
                    suffixIcon: IconButton(
                    onPressed: () => setState(() => passwordVisibility = !passwordVisibility),
                    icon: passwordVisibility
                      ? const Icon(Icons.visibility)
                      : const Icon(Icons.visibility_off),
                  ),
                ),
                autovalidateMode: AutovalidateMode.onUserInteraction,
                validator: (password) => password != null && passwordController.text != passwordRepeatController.text
                  ? "Doesn't match"
                  : null,
              ),
              const SizedBox(height: 67),
              SizedBox(
                width: double.infinity,
                child: ElevatedButton(
                  onPressed: signUp,
                  child: const Text("Sign Up"),
                ),
              ),
              const SizedBox(height: 16),
              RichText(
                text: TextSpan(
                  text: "Already have an account?  ",
                  style: Utils.h4TextStyleAlt(),
                  children: [
                    TextSpan(
                      recognizer: TapGestureRecognizer()
                       ..onTap = widget.onClickedSignIn,
                      text: "Log In",
                      style: Utils.h4TextStyle(color: Utils.primaryColor),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future signUp() async {
    final isValid = formKey.currentState!.validate();
    if (!isValid) return;

    showDialog(
      context: context,
      barrierDismissible: false,
      builder: (context) => const Center(child: CircularProgressIndicator()),
    );

    try {
      final result = await FirebaseAuth.instance.createUserWithEmailAndPassword(
        email: emailController.text.trim(),
        password: passwordController.text.trim(),
      );

      await DatabaseService.usersCollection().doc(result.user!.uid).set({
        "id": result.user!.uid,
        "email": emailController.text.trim(),
      });
    } on FirebaseAuthException catch (e) {
      Utils.showSnackBar(e.message);
    }

    Utils.navigatorKey.currentState!.popUntil((route) => route.isFirst);
  }
}