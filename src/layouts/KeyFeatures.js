import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Sidebar from "components/Sidebar/Sidebar.js";
import FooterInternal from "components/Footers/FooterInternal";
import Header from "components/Headers/Header";

// views
import ComponentBasedArchitecture from "views/key-features/ComponentBasedArchitecture";
import JsxInReact from "views/key-features/JsxInReact";
import VirtualDom from "views/key-features/VirtualDom";
import DeclarativeProgramming from "views/key-features/DeclarativeProgramming";
import UnidirectionalDataFlow from "views/key-features/UnidirectionalDataFlow";
import StateManagement from "views/key-features/StateManagement";
import RichEcosystem from "views/key-features/RichEcosystem";
import Hooks from "views/key-features/Hooks";

export default function KeyFeatures() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-custom bg-blueGray-100 min-h-screen flex flex-col">
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
            <Route
              path="/key-features/virtualdom"
              component={VirtualDom}
            />
            <Route
              path="/key-features/declarativeprogramming"
              component={DeclarativeProgramming}
            />
            <Route
              path="/key-features/unidirectionaldataflow"
              component={UnidirectionalDataFlow}
            />
            <Route
              path="/key-features/statemanagement"
              component={StateManagement}
            />
            <Route
              path="/key-features/richecosystem"
              component={RichEcosystem}
            />
            <Route
              path="/key-features/hooks"
              component={Hooks}
            />
          </Switch>
        </div>
        <FooterInternal />
      </div>
    </>
  );
}
