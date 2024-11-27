import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterInternal from "components/Footers/FooterInternal";
import Header from "components/Headers/Header";

// views
import ComponentBasedArchitecture from "views/key-features/ComponentBasedArchitecture";
import JsxInReact from "views/key-features/JsxInReact";

export default function KeyFeatures() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100 min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow p-8">
          <h1 className="text-3xl font-bold">Key Features</h1>
        </div>
        <div className="px-4 md:px-10 mx-auto w-full">
          <Switch>
            <Route
              path="/key-features/componentbasedarchitecture"
              component={ComponentBasedArchitecture}
            />
            <Route
              path="/key-features/jsxinreact"
              component={JsxInReact}
            />
          </Switch>
        </div>
        <FooterInternal />
      </div>
    </>
  );
}
