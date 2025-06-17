
package com.monstorcoursehub.app // Ensure this matches your AndroidManifest.xml and build.gradle namespace

import android.annotation.SuppressLint
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebSettings
import android.webkit.WebView
import android.webkit.WebViewClient

class MainActivity : AppCompatActivity() {
    private lateinit var webView: WebView

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // Set the theme back to AppTheme after splash
        setTheme(R.style.AppTheme)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webview)
        webView.webViewClient = WebViewClient() // Handles page navigation within the WebView

        // Configure WebView settings
        webView.settings.apply {
            javaScriptEnabled = true // Essential for modern web apps
            domStorageEnabled = true // For localStorage and sessionStorage
            loadWithOverviewMode = true // Load the WebView completely zoomed out
            useWideViewPort = true // Makes the WebView have a normal viewport (like a desktop browser)
            setSupportZoom(false) // Disable pinch-to-zoom
            builtInZoomControls = false // Disable built-in zoom controls
            displayZoomControls = false // Do not display on-screen zoom controls
            cacheMode = WebSettings.LOAD_DEFAULT // Default cache behavior
        }

        // Load your Vercel app URL
        webView.loadUrl("https://e-leak.vercel.app")
    }

    // Handle back button press to navigate WebView history
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack()
        } else {
            super.onBackPressed()
        }
    }
}
