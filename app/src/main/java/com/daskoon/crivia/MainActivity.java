package com.daskoon.crivia;

import android.os.Bundle;
import com.google.androidbrowserhelper.trusted.TwaLauncherActivity;

public class MainActivity extends TwaLauncherActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }

    @Override
    protected String getLaunchingUrl() {
        return "https://crivia.vercel.app";
    }
}
