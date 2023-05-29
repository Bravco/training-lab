import 'package:flutter/material.dart';

class Utils {
  static final navigatorKey = GlobalKey<NavigatorState>();
  static final messengerKey = GlobalKey<ScaffoldMessengerState>();

  static showSnackBar(String? text) {
    if (text == null) return;

    final snackBar = SnackBar(
      content: Text(text),
      backgroundColor: Colors.red,
    );

    messengerKey.currentState!
      ..removeCurrentSnackBar()
      ..showSnackBar(snackBar);
  }

  static final MaterialColor primaryColor = MaterialColor(0xFF4791FF, {
    50: const Color(0xFF5E8BE3).withOpacity(.1),
    100: const Color(0xFF5E8BE3).withOpacity(.2),
    200: const Color(0xFF5E8BE3).withOpacity(.3),
    300: const Color(0xFF5E8BE3).withOpacity(.4),
    400: const Color(0xFF5E8BE3).withOpacity(.5),
    500: const Color(0xFF5E8BE3).withOpacity(.6),
    600: const Color(0xFF5E8BE3).withOpacity(.7),
    700: const Color(0xFF5E8BE3).withOpacity(.8),
    800: const Color(0xFF5E8BE3).withOpacity(.9),
    900: const Color(0xFF5E8BE3).withOpacity(1),
  });

  static final Color primaryColorAlt = primaryColor.withOpacity(.3);
  static final BoxShadow primaryColorBoxShadow = boxShadow(primaryColor.withOpacity(.75));

  static const Color primaryBackgroundColor = Color(0xFF1C232D);
  static const Color secondaryBackgroundColor = Color(0xFF262F3C);

  static const Color textColor = Colors.white;
  static final Color textColorAlt = textColor.withOpacity(.5);

  static final ThemeData themeData = ThemeData(
    fontFamily: "Outfit",
    brightness: Brightness.dark,
    colorScheme: const ColorScheme.dark(),
    primarySwatch: Utils.primaryColor,
    scaffoldBackgroundColor: Utils.primaryBackgroundColor,
    iconTheme: const IconThemeData(color: Colors.white),
    appBarTheme: const AppBarTheme(
      elevation: 0,
      foregroundColor: textColor,
      backgroundColor: Colors.transparent,
      centerTitle: true,
    ),
    floatingActionButtonTheme: FloatingActionButtonThemeData(
      foregroundColor: Colors.white,
      backgroundColor: Utils.primaryColor,
    ),
    elevatedButtonTheme: ElevatedButtonThemeData(
      style: ButtonStyle(
        minimumSize: MaterialStateProperty.all(const Size(120, 32)),
        foregroundColor: MaterialStateProperty.all(Colors.white),
        backgroundColor: MaterialStateProperty.all(primaryColor),
        shape: MaterialStateProperty.all(
          RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(8),
          ),
        ),
        textStyle: MaterialStateProperty.all(h4TextStyle()),
      ),
    ),
    textButtonTheme: TextButtonThemeData(
      style: ButtonStyle(
        foregroundColor: MaterialStateProperty.all(Colors.white),
      ),
    ),
    inputDecorationTheme: InputDecorationTheme(
      suffixIconColor: textColorAlt,
      focusedBorder: UnderlineInputBorder(
        borderSide: BorderSide(
          width: 2,
          color: primaryColor,
        ),
      ),
    ),
    textSelectionTheme: TextSelectionThemeData(
      cursorColor: primaryColor,
    ),
  );

  static BoxShadow boxShadow(Color color) {
    return BoxShadow(
      color: color,
      spreadRadius: 0,
      blurRadius: 20,
      offset: const Offset(0, 4),
    );
  }

  static TextStyle h1TextStyle({ Color? color, FontWeight? fontWeight }) => TextStyle(
    color: color,
    fontSize: 32,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h1TextStyleAlt({ FontWeight? fontWeight }) => TextStyle(
    color: textColorAlt,
    fontSize: 32,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h2TextStyle({ Color? color, FontWeight? fontWeight }) => TextStyle(
    color: color,
    fontSize: 24,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h2TextStyleAlt({ FontWeight? fontWeight }) => TextStyle(
    color: textColorAlt,
    fontSize: 24,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h3TextStyle({ Color? color, FontWeight? fontWeight }) => TextStyle(
    color: color,
    fontSize: 20,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h3TextStyleAlt({ FontWeight? fontWeight }) => TextStyle(
    color: textColorAlt,
    fontSize: 20,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h4TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: color,
    fontSize: 16,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h4TextStyleAlt({ FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: textColorAlt,
    fontSize: 16,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h5TextStyle({ Color? color, FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: color,
    fontSize: 14,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );

  static TextStyle h5TextStyleAlt({ FontWeight? fontWeight = FontWeight.w700 }) => TextStyle(
    color: textColorAlt,
    fontSize: 14,
    fontWeight: fontWeight,
    letterSpacing: .1,
  );
}