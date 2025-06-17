package com.monstorcoursehub.app

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import android.webkit.WebView
import android.webkit.WebSettings // Import WebSettings

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        // Set the AppTheme after the SplashTheme has done its job
        // This should be called before super.onCreate() and setContentView()
        setTheme(R.style.AppTheme) 
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val webView = findViewById<WebView>(R.id.webview)
        webView.apply {
            // Enable JavaScript
            settings.javaScriptEnabled = true

            // Optional: Improve WebView security and performance
            settings.domStorageEnabled = true // If your web app uses localStorage
            // settings.cacheMode = WebSettings.LOAD_DEFAULT // Control caching behavior

            // Disable zoom/text selection as requested
            settings.setSupportZoom(false)
            settings.builtInZoomControls = false
            settings.displayZoomControls = false
            
            // Load your Vercel app URL
            loadUrl("https://e-leak.vercel.app")
        }
    }
}
