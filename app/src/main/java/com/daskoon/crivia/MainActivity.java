package com.daskoon.crivia;

import android.os.Bundle;
import com.google.androidbrowserhelper.trusted.LauncherActivity;

public class MainActivity extends LauncherActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected boolean shouldLaunchImmediately() {
        // Launch the TWA immediately to show the splash screen.
        return true;
    }
}