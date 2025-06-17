# Add project specific ProGuard rules here.
# By default, the flags in this file are applied to all build types.

# ProGuard rules for Kotlin
-dontwarn org.jetbrains.annotations.**
-keep class kotlin.Metadata { *; }
-keepclassmembers class kotlin.Metadata {
    public <methods>;
    public <fields>;
}
-keepclasseswithmembers class kotlin.** {
    @kotlin.Metadata <methods>;
}
-keepclasseswithmembers class kotlin.jvm.internal.* {
    <fields>;
    <methods>;
}
-keep enum kotlin.annotation.AnnotationTarget { *; }
-keep enum kotlin.annotation.AnnotationRetention { *; }

# For AppCompat and other AndroidX libraries
-keep class androidx.** { *; }
-keep interface androidx.** { *; }
-keep public class * extends androidx.versionedparcelable.VersionedParcelable
