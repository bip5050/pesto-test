"use client";

import React, { Suspense, useState, useEffect } from "react";

import "./globals.css";






export default function RootLayout({ children }) {
  return (
    <html lang="en">
  
      <body >  <Suspense fallback={<p>loading...</p>}>{children}</Suspense></body>
    </html>
  );
}
