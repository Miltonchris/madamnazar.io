/** @jsx jsx */
import React, { useContext } from "react";
import ReactGA from "react-ga";
import { css, jsx } from "@emotion/core";
import {
  Consumer,
 ContextProviderComponent
} from "./Context"


import { docCookies } from "../scripts/cookies";
import { WEBSITE_NAME } from "../scripts/constants";
import { maxAgeToGMT } from "../scripts/helpers";
const frame = "/images/frame.png";


const bannerStyles = {
  root: css`
      background: url("/images/bg-cowboys.jpg") repeat center top / 600px;
      max-width: 260px;
      width: 100%;
      max-height: 100px;
      left: 0;
      bottom: 0;
      color: white;
      z-index: 999;
      border-color: #2e2e2e;
      position:fixed;
      z-index: 999999999999999999999999;
      border-radius: 300px;
      margin: 16px;

      @media (max-width: 960px) {
        margin: 16px auto;
        right: 0;
      }
    `
};

export const SupportBanner = ({ parent }) => {
  console.log(parent)
  return (
        <div
          className="pv-8 ph-16 fsz-12 md:fsz-14 bxs-default"
          css={bannerStyles.root}
        >
          <div className="maw-600 pos-relative m-auto d-flex jc-between ta-center">
            {" "}
            <span
              className="cursor-pointer fx-10"
              css={css`
                text-decoration: none;
                color: white;
                font-weight: bold;
                text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
              `}
              onClick={() => parent.setState({showPatreonAbout: true})}
            >
              <b>
                Support {WEBSITE_NAME}! <br />
                Click to learn more
              </b>
               
            </span>
            <span className="as-center js-center fx-2">
              <button
                className="app-none bdw-0 bgc-transparent p-0 m-0 va-middle cursor-pointer"
                onClick={() => {
                 parent.setState({
                    showPatreonAd: false,
                    showPatreonAbout: false,
                  })
                  docCookies.setItem("patreon-ad", "false", maxAgeToGMT(999))
                }}
              >
                <img
                  src={"/images/cancel-icon.svg"}
                  className="va-middle"
                  alt="close icon"
                />
              </button>
            </span>
          </div>
        </div>
       )}
