-keepattributes *Annotation*
-keepattributes SourceFile,LineNumberTable
-keep public class * extends java.lang.Exception

-keep class com.google.androidbrowserhelper.** { *; }
-keep class androidx.browser.** { *; }

-dontwarn com.google.androidbrowserhelper.**
-dontwarn androidx.browser.**
