import React, { useState, useEffect } from 'react';
import { API, Storage } from 'aws-amplify';
import { Button, Flex, Heading, Text, TextField, View, Card, Image } from '@aws-amplify/ui-react';
import { listGames } from "../graphql/queries";
import {
  createGame as createGameMutation,
  deleteGame as deleteGameMutation,
} from "../graphql/mutations";

const PrivacyPolicy = () => {

  return (
    <Card>
      <View as="form" margin="3rem 0">
          <div data-custom-class="body">
            <div>
              <strong>
                <span style={{ fontSize: 26 }}>
                  <span data-custom-class="title">
                    <bdt className="block-component" />
                    <bdt className="question">PRIVACY POLICY</bdt>
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                </span>
              </strong>
            </div>
            <div>
              <br />
            </div>
            <div>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <strong>
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="subtitle">
                      Last updated <bdt className="question">March 15, 2023</bdt>
                    </span>
                  </span>
                </strong>
              </span>
            </div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div>
              <br />
            </div>
            <div style={{ lineHeight: "1.5" }}>
              <span style={{ color: "rgb(127, 127, 127)" }}>
                <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    This privacy notice for{" "}
                    <bdt className="question">
                      TkGamers
                      <bdt className="block-component" />
                    </bdt>{" "}
                    (<bdt className="block-component" />"
                    <bdt className="block-component" />
                    <strong>Company</strong>
                    <bdt className="statement-end-if-in-editor" />
                    ," "<strong>we</strong>," "<strong>us</strong>," or "
                    <strong>our</strong>"<bdt className="statement-end-if-in-editor" />
                  </span>
                  <span data-custom-class="body_text">
                    ), describes how and why we might collect, store, use, and/or share (
                    <bdt className="block-component" />"<strong>process</strong>"
                    <bdt className="statement-end-if-in-editor" />) your information when
                    you use our services (<bdt className="block-component" />"
                    <strong>Services</strong>"
                    <bdt className="statement-end-if-in-editor" />
                    ), such as when you:
                  </span>
                </span>
              </span>
              <span style={{ fontSize: 15 }}>
                <span style={{ color: "rgb(127, 127, 127)" }}>
                  <span data-custom-class="body_text">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <ul>
              <li style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      Visit our website
                      <bdt className="block-component" /> at{" "}
                      <bdt className="question">
                        <a
                          href="https://www.tkgamers.com/"
                          target="_blank"
                          data-custom-class="link"
                        >
                          https://www.tkgamers.com/
                        </a>
                      </bdt>
                      <span style={{ fontSize: 15 }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span data-custom-class="body_text">
                            <span style={{ fontSize: 15 }}>
                              <span style={{ color: "rgb(89, 89, 89)" }}>
                                <bdt className="statement-end-if-in-editor">
                                  , or any website of ours that links to this privacy
                                  notice
                                </bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </li>
            </ul>
            <div>
              <bdt className="block-component">
                <span style={{ fontSize: 15 }}>
                  <span style={{ fontSize: 15 }}>
                    <span style={{ color: "rgb(127, 127, 127)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span data-custom-class="body_text">
                            <bdt className="block-component" />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </bdt>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <bdt className="block-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        Engage with us in other related ways, including any sales,
                        marketing, or events
                        <span style={{ fontSize: 15 }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <bdt className="statement-end-if-in-editor" />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span data-custom-class="body_text">
                      <strong>Questions or concerns?&nbsp;</strong>Reading this privacy
                      notice will help you understand your privacy rights and choices. If
                      you do not agree with our policies and practices, please do not use
                      our Services. If you still have any questions or concerns, please
                      contact us at <bdt className="question">bllipps199@gmail.com</bdt>.
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <strong>
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="heading_1">SUMMARY OF KEY POINTS</span>
                  </span>
                </strong>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>
                      <em>
                        This summary provides key points from our privacy notice, but you
                        can find out more details about any of these topics by clicking
                        the link following each key point or by using our table of
                        contents below to find the section you are looking for. You can
                        also click&nbsp;
                      </em>
                    </strong>
                  </span>
                </span>
                <a data-custom-class="link" href="#toc">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <strong>
                        <em>here</em>
                      </strong>
                    </span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>
                      <em>&nbsp;to go directly to our table of contents.</em>
                    </strong>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>What personal information do we process?</strong> When you
                    visit, use, or navigate our Services, we may process personal
                    information depending on how you interact with{" "}
                    <bdt className="block-component" />
                    <bdt className="question">TkGamers</bdt>
                    <bdt className="statement-end-if-in-editor" /> and the Services, the
                    choices you make, and the products and features you use. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#personalinfo">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">&nbsp;to learn more.</span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>Do we process any sensitive personal information?</strong>{" "}
                    <bdt className="block-component" />
                    We do not process sensitive personal information.
                    <bdt className="else-block" />
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>Do we receive any information from third parties?</strong>{" "}
                    <bdt className="block-component" />
                    We may receive information from public databases, marketing partners,
                    social media platforms, and other outside sources. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#othersources">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    &nbsp;to learn more.
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>How do we process your information?</strong> We process your
                    information to provide, improve, and administer our Services,
                    communicate with you, for security and fraud prevention, and to comply
                    with law. We may also process your information for other purposes with
                    your consent. We process your information only when we have a valid
                    legal reason to do so. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#infouse">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">&nbsp;to learn more.</span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>
                      In what situations and with which{" "}
                      <bdt className="block-component" />
                      parties do we share personal information?
                    </strong>{" "}
                    We may share information in specific situations and with specific{" "}
                    <bdt className="block-component" />
                    third parties. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#whoshare">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    &nbsp;to learn more.
                    <bdt className="block-component" />
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>How do we keep your information safe?</strong> We have{" "}
                    <bdt className="block-component" />
                    organizational
                    <bdt className="statement-end-if-in-editor" /> and technical processes
                    and procedures in place to protect your personal information. However,
                    no electronic transmission over the internet or information storage
                    technology can be guaranteed to be 100% secure, so we cannot promise
                    or guarantee that hackers, cybercriminals, or other{" "}
                    <bdt className="block-component" />
                    unauthorized
                    <bdt className="statement-end-if-in-editor" /> third parties will not
                    be able to defeat our security and improperly collect, access, steal,
                    or modify your information. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#infosafe">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    &nbsp;to learn more.
                    <bdt className="statement-end-if-in-editor" />
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>What are your rights?</strong> Depending on where you are
                    located geographically, the applicable privacy law may mean you have
                    certain rights regarding your personal information. Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#privacyrights">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">&nbsp;to learn more.</span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>How do you exercise your rights?</strong> The easiest way to
                    exercise your rights is by filling out our data subject request form
                    available <bdt className="block-component" />
                  </span>
                </span>
                <a
                  data-custom-class="link"
                  href="https://app.termly.io/notify/2fc53150-8bf3-4fb1-972f-e2cd464eec1d"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <bdt className="block-component" />, or by contacting us. We will
                    consider and act upon any request in accordance with applicable data
                    protection laws.
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    Want to learn more about what <bdt className="block-component" />
                    <bdt className="question">TkGamers</bdt>
                    <bdt className="statement-end-if-in-editor" /> does with any
                    information we collect? Click&nbsp;
                  </span>
                </span>
                <a data-custom-class="link" href="#toc">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text">here</span>
                  </span>
                </a>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    &nbsp;to review the notice in full.
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div id="toc" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(0, 0, 0)" }}>
                      <strong>
                        <span data-custom-class="heading_1">TABLE OF CONTENTS</span>
                      </strong>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#infocollect">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      1. WHAT INFORMATION DO WE COLLECT?
                    </span>
                  </a>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#infouse">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      2. HOW DO WE PROCESS YOUR INFORMATION?
                      <bdt className="block-component" />
                    </span>
                  </a>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <a data-custom-class="link" href="#whoshare">
                      3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                    </a>
                  </span>
                  <span data-custom-class="body_text">
                    <bdt className="block-component" />
                  </span>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <bdt className="block-component" />
                        </span>
                      </span>
                      &nbsp;
                    </span>
                    &nbsp;
                  </span>
                  &nbsp;
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#cookies">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </span>
                  </a>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <bdt className="block-component" />
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#sociallogins">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                        </span>
                      </span>
                    </span>
                  </a>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <bdt className="statement-end-if-in-editor" />
                            </span>
                          </span>
                          <bdt className="block-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#inforetain">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      6. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </span>
                  </a>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <bdt className="block-component" />
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#infosafe">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      7. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </span>
                  </a>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <bdt className="statement-end-if-in-editor" />
                          <bdt className="block-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#infominors">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      8. DO WE COLLECT INFORMATION FROM MINORS?
                    </span>
                  </a>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ color: "rgb(89, 89, 89)" }}>
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    <a data-custom-class="link" href="#privacyrights">
                      9. WHAT ARE YOUR PRIVACY RIGHTS?
                    </a>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#DNT">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      10. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </span>
                  </a>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#caresidents">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </span>
                  </a>
                </span>
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text" />
                  </span>
                </bdt>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <a data-custom-class="link" href="#policyupdates">
                    <span style={{ color: "rgb(89, 89, 89)" }}>
                      12. DO WE MAKE UPDATES TO THIS NOTICE?
                    </span>
                  </a>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <a data-custom-class="link" href="#contact">
                  <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                    13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                  </span>
                </a>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <a data-custom-class="link" href="#request">
                  <span style={{ color: "rgb(89, 89, 89)" }}>
                    14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
                    YOU?
                  </span>
                </a>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div id="infocollect" style={{ lineHeight: "1.5" }}>
                <span style={{ color: "rgb(127, 127, 127)" }}>
                  <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                          <strong>
                            <span data-custom-class="heading_1">
                              1. WHAT INFORMATION DO WE COLLECT?
                            </span>
                          </strong>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div id="personalinfo" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="heading_2" style={{ color: "rgb(0, 0, 0)" }}>
                  <span style={{ fontSize: 15 }}>
                    <strong>Personal information you disclose to us</strong>
                  </span>
                </span>
              </div>
              <div>
                <div>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>In Short:</em>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>&nbsp;</em>
                              </strong>
                              <em>
                                We collect personal information that you provide to us.
                              </em>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      We collect personal information that you voluntarily provide to us
                      when you{" "}
                      <span style={{ fontSize: 15 }}>
                        <bdt className="block-component" />
                      </span>
                      register on the Services,&nbsp;
                    </span>
                    <span style={{ fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                      <span data-custom-class="body_text">
                        express an interest in obtaining information about us or our
                        products and Services, when you participate in activities on the
                        Services, or otherwise when you contact us.
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>Personal Information Provided by You.</strong> The personal
                      information that we collect depends on the context of your
                      interactions with us and the Services, the choices you make, and the
                      products and features you use. The personal information we collect
                      may include the following:
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="forloop-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="question">names</bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="forloop-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="question">email addresses</bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="forloop-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="question">job titles</bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="forloop-component" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="question">usernames</bdt>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="forloop-component" />
                        </span>
                        <span data-custom-class="body_text">
                          <bdt className="statement-end-if-in-editor" />
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div id="sensitiveinfo" style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <strong>Sensitive Information.</strong>{" "}
                    <bdt className="block-component" />
                    We do not process sensitive information.
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <bdt className="else-block" />
                  </span>
                </span>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="block-component">
                            <bdt className="block-component" />
                          </bdt>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>Social Media Login Data.&nbsp;</strong>We may provide you
                      with the option to register with us using your existing social media
                      account details, like your Facebook, Twitter, or other social media
                      account. If you choose to register in this way, we will collect the
                      information described in the section called{" "}
                      <bdt className="block-component" />"
                      <bdt className="statement-end-if-in-editor" />
                      <span style={{ fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <span style={{ fontSize: 15 }}>
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <a data-custom-class="link" href="#sociallogins">
                                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
                              </a>
                            </span>
                          </span>
                        </span>
                      </span>
                      <bdt className="block-component" />"
                      <bdt className="statement-end-if-in-editor" /> below.
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ fontSize: 15 }}>
                        <bdt className="statement-end-if-in-editor">
                          <bdt className="statement-end-if-in-editor" />
                        </bdt>
                      </span>
                    </span>
                  </span>
                </span>
                <bdt className="block-component" />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      All personal information that you provide to us must be true,
                      complete, and accurate, and you must notify us of any changes to
                      such personal information.
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span data-custom-class="heading_2" style={{ color: "rgb(0, 0, 0)" }}>
                  <span style={{ fontSize: 15 }}>
                    <strong>Information automatically collected</strong>
                  </span>
                </span>
              </div>
              <div>
                <div>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>In Short:</em>
                              </strong>
                            </span>
                          </span>
                        </span>
                      </span>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>&nbsp;</em>
                              </strong>
                              <em>
                                Some information — such as your Internet Protocol (IP)
                                address and/or browser and device characteristics — is
                                collected automatically when you visit our Services.
                              </em>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      We automatically collect certain information when you visit, use, or
                      navigate the Services. This information does not reveal your
                      specific identity (like your name or contact information) but may
                      include device and usage information, such as your IP address,
                      browser and device characteristics, operating system, language
                      preferences, referring URLs, device name, country, location,
                      information about how and when you use our Services, and other
                      technical information. This information is primarily needed to
                      maintain the security and operation of our Services, and for our
                      internal analytics and reporting purposes.
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      Like many businesses, we also collect information through cookies
                      and similar technologies. <bdt className="block-component" />
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <bdt className="statement-end-if-in-editor">
                        <span data-custom-class="body_text" />
                      </bdt>
                    </span>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      The information we collect includes:
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <em>Log and Usage Data.</em> Log and usage data is
                        service-related, diagnostic, usage, and performance information
                        our servers automatically collect when you access or use our
                        Services and which we record in log files. Depending on how you
                        interact with us, this log data may include your IP address,
                        device information, browser type, and settings and information
                        about your activity in the Services
                        <span style={{ fontSize: 15 }}>&nbsp;</span>(such as the date/time
                        stamps associated with your usage, pages and files viewed,
                        searches, and other actions you take such as which features you
                        use), device event information (such as system activity, error
                        reports (sometimes called <bdt className="block-component" />
                        "crash dumps"
                        <bdt className="statement-end-if-in-editor" />
                        ), and hardware settings).
                        <span style={{ fontSize: 15 }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <bdt className="statement-end-if-in-editor" />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text" />
                  </span>
                </bdt>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <em>Device Data.</em> We collect device data such as information
                        about your computer, phone, tablet, or other device you use to
                        access the Services. Depending on the device used, this device
                        data may include information such as your IP address (or proxy
                        server), device and application identification numbers, location,
                        browser type, hardware model, Internet service provider and/or
                        mobile carrier, operating system, and system configuration
                        information.
                        <span style={{ fontSize: 15 }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <bdt className="statement-end-if-in-editor" />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }}>
                    <span data-custom-class="body_text" />
                  </span>
                </bdt>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <em>Location Data.</em> We collect location data such as
                        information about your device's location, which can be either
                        precise or imprecise. How much information we collect depends on
                        the type and settings of the device you use to access the
                        Services. For example, we may use GPS and other technologies to
                        collect geolocation data that tells us your current location
                        (based on your IP address). You can opt out of allowing us to
                        collect this information either by refusing access to the
                        information or by disabling your Location setting on your device.
                        However, if you choose to opt out, you may not be able to use
                        certain aspects of the Services.
                        <span style={{ fontSize: 15 }}>
                          <span style={{ color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <bdt className="statement-end-if-in-editor" />
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div>
                <bdt className="block-component">
                  <span style={{ fontSize: 15 }} />
                </bdt>
                <bdt className="statement-end-if-in-editor" />
                <span data-custom-class="body_text">
                  <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                    <span data-custom-class="body_text">
                      <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                        <span data-custom-class="body_text">
                          <bdt className="statement-end-if-in-editor">
                            <bdt className="block-component" />
                          </bdt>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div id="othersources" style={{ lineHeight: "1.5" }}>
                <span data-custom-class="heading_2" style={{ color: "rgb(0, 0, 0)" }}>
                  <span style={{ fontSize: 15 }}>
                    <strong>Information collected from other sources</strong>
                  </span>
                </span>
              </div>
              <div>
                <div>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>In Short:&nbsp;</em>
                              </strong>
                              <em>
                                We may collect limited data from public databases,
                                marketing partners,{" "}
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <span style={{ fontSize: 15 }}>
                                    <em>
                                      <span data-custom-class="body_text">
                                        <bdt className="block-component" />
                                        social media platforms,{" "}
                                        <bdt className="statement-end-if-in-editor" />
                                      </span>
                                    </em>
                                  </span>
                                </span>
                                and other outside sources.
                              </em>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      In order to enhance our ability to provide relevant marketing,
                      offers, and services to you and update our records, we may obtain
                      information about you from other sources, such as public databases,
                      joint marketing partners, affiliate programs, data providers,
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <bdt className="block-component" /> social media platforms,
                            <bdt className="statement-end-if-in-editor" />
                          </span>
                        </span>
                        &nbsp;
                      </span>
                      and from other third parties. This information includes mailing
                      addresses, job titles, email addresses, phone numbers, intent data
                      (or user <bdt className="block-component" />
                      behavior
                      <bdt className="statement-end-if-in-editor" /> data), Internet
                      Protocol (IP) addresses, social media profiles, social media URLs,
                      and custom profiles, for purposes of targeted advertising and event
                      promotion.
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                  <bdt className="block-component" />
                                </span>
                              </span>
                              &nbsp;
                            </span>
                            If you interact with us on a social media platform using your
                            social media account (e.g.
                            <bdt className="block-component" />,
                            <bdt className="statement-end-if-in-editor" /> Facebook or
                            Twitter), we receive personal information about you such as
                            your name, email address, and gender. Any personal information
                            that we collect from your social media account depends on your
                            social media account's privacy settings.
                          </span>
                        </span>
                      </span>
                    </span>
                    <span data-custom-class="body_text">
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <span style={{ fontSize: 15 }}>
                                <span data-custom-class="body_text">
                                  <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span style={{ fontSize: 15 }}>
                                      <span data-custom-class="body_text">
                                        <bdt className="statement-end-if-in-editor" />
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <span style={{ color: "rgb(89, 89, 89)" }}>
                        <span style={{ fontSize: 15 }}>
                          <span data-custom-class="body_text">
                            <span style={{ color: "rgb(89, 89, 89)" }}>
                              <span style={{ color: "rgb(89, 89, 89)" }}>
                                <bdt className="block-component">
                                  <span
                                    style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}
                                  >
                                    <span data-custom-class="body_text">
                                      <span
                                        style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}
                                      >
                                        <span data-custom-class="body_text">
                                          <bdt className="statement-end-if-in-editor">
                                            <bdt className="statement-end-if-in-editor" />
                                          </bdt>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </bdt>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
                <span style={{ fontSize: 15 }}>
                  <span data-custom-class="body_text">
                    <bdt className="block-component" />
                  </span>
                </span>
              </div>
              <div id="infouse" style={{ lineHeight: "1.5" }}>
                <span style={{ color: "rgb(127, 127, 127)" }}>
                  <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span id="control" style={{ color: "rgb(0, 0, 0)" }}>
                          <strong>
                            <span data-custom-class="heading_1">
                              2. HOW DO WE PROCESS YOUR INFORMATION?
                            </span>
                          </strong>
                        </span>
                      </span>
                    </span>
                  </span>
                </span>
              </div>
              <div>
                <div style={{ lineHeight: "1.5" }}>
                  <br />
                </div>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ color: "rgb(127, 127, 127)" }}>
                    <span style={{ color: "rgb(89, 89, 89)", fontSize: 15 }}>
                      <span data-custom-class="body_text">
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                <em>In Short:&nbsp;</em>
                              </strong>
                              <em>
                                We process your information to provide, improve, and
                                administer our Services, communicate with you, for
                                security and fraud prevention, and to comply with law. We
                                may also process your information for other purposes with
                                your consent.
                              </em>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </div>
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <br />
              </div>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <strong>
                        We process your personal information for a variety of reasons,
                        depending on how you interact with our Services, including:
                      </strong>
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>
                          To facilitate account creation and authentication and otherwise
                          manage user accounts.&nbsp;
                        </strong>
                        We may process your information so you can create and log in to
                        your account, as well as keep your account in working order.
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                      <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <span data-custom-class="body_text">
                                          <bdt className="statement-end-if-in-editor" />
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
              </div>
              <ul>
                <li style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <strong>
                          To deliver and facilitate delivery of services to the
                          user.&nbsp;
                        </strong>
                        We may process your information to provide you with the requested
                        service.
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                                  <span data-custom-class="body_text">
                                    <span style={{ fontSize: 15 }}>
                                      <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <span style={{ color: "rgb(89, 89, 89)" }}>
                                              <span data-custom-class="body_text">
                                                <bdt className="statement-end-if-in-editor" />
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </span>
                    </span>
                  </span>
                </li>
              </ul>
              <div style={{ lineHeight: "1.5" }}>
                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span data-custom-class="body_text">
                      <bdt className="block-component" />
                    </span>
                  </span>
                </span>
                <div style={{ lineHeight: "1.5" }}>
                  <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span data-custom-class="body_text">
                        <bdt className="block-component" />
                      </span>
                    </span>
                  </span>
                  <div style={{ lineHeight: "1.5" }}>
                    <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                      <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                        <span data-custom-class="body_text">
                          <bdt className="block-component" />
                        </span>
                      </span>
                    </span>
                    <div style={{ lineHeight: "1.5" }}>
                      <bdt className="block-component">
                        <span style={{ fontSize: 15 }} />
                      </bdt>
                    </div>
                    <ul>
                      <li style={{ lineHeight: "1.5" }}>
                        <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                          <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                            <span data-custom-class="body_text">
                              <strong>
                                To send administrative information to you.&nbsp;
                              </strong>
                              We may process your information to send you details about
                              our products and services, changes to our terms and
                              policies, and other similar information.
                              <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                                <span style={{ fontSize: 15, color: "rgb(89, 89, 89)" }}>
                                  <span data-custom-class="body_text">
                                    <bdt className="statement-end-if-in-editor" />
                                  </span>
                                </span>
                              </span>
                            </span>
                          </span>
                        </span>
                      </li>
                    </ul>
                    <div style={{ lineHeight: "1.5" }}>
                      <bdt className="block-component">
                        <span style={{ fontSize: 15 }} />
                      </bdt>
                      <div style={{ lineHeight: "1.5" }}>
                        <bdt className="block-component">
                          <span style={{ fontSize: 15 }} />
                        </bdt>
                        <div style={{ lineHeight: "1.5" }}>
                          <bdt className="block-component">
                            <span style={{ fontSize: 15 }}>
                              <span data-custom-class="body_text" />
                            </span>
                          </bdt>
                          <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                            <bdt className="block-component">
                              <span style={{ fontSize: 15 }} />
                            </bdt>
                          </p>
                          <ul>
                            <li style={{ lineHeight: "1.5" }}>
                              <span style={{ fontSize: 15 }}>
                                <span style={{ color: "rgb(89, 89, 89)" }}>
                                  <span style={{ color: "rgb(89, 89, 89)" }}>
                                    <span data-custom-class="body_text">
                                      <strong>
                                        To enable user-to-user communications.&nbsp;
                                      </strong>
                                      We may process your information if you choose to use
                                      any of our offerings that allow for communication
                                      with another user.
                                      <span style={{ color: "rgb(89, 89, 89)" }}>
                                        <span style={{ color: "rgb(89, 89, 89)" }}>
                                          <span data-custom-class="body_text">
                                            <span style={{ color: "rgb(89, 89, 89)" }}>
                                              <span data-custom-class="body_text">
                                                <span
                                                  style={{ color: "rgb(89, 89, 89)" }}
                                                >
                                                  <span data-custom-class="body_text">
                                                    <bdt className="statement-end-if-in-editor" />
                                                  </span>
                                                </span>
                                              </span>
                                            </span>
                                          </span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </li>
                          </ul>
                          <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                            <bdt className="block-component">
                              <span style={{ fontSize: 15 }} />
                            </bdt>
                          </p>
                          <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                            <bdt className="block-component" />
                          </p>
                          <p style={{ fontSize: 15, lineHeight: "1.5" }}>
                            <bdt className="block-component" />
                          </p>
                          <div style={{ lineHeight: "1.5" }}>
                            <bdt className="block-component">
                              <span style={{ fontSize: 15 }} />
                            </bdt>
                            <div style={{ lineHeight: "1.5" }}>
                              <bdt className="block-component">
                                <span style={{ fontSize: 15 }} />
                              </bdt>
                              <div style={{ lineHeight: "1.5" }}>
                                <bdt className="block-component">
                                  <span style={{ fontSize: 15 }} />
                                </bdt>
                                <div style={{ lineHeight: "1.5" }}>
                                  <span style={{ fontSize: 15 }}>
                                    <bdt className="block-component">
                                      <span data-custom-class="body_text" />
                                    </bdt>
                                  </span>
                                  <div style={{ lineHeight: "1.5" }}>
                                    <bdt className="block-component">
                                      <span style={{ fontSize: 15 }}>
                                        <span data-custom-class="body_text" />
                                      </span>
                                    </bdt>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </bdt>
                                    </div>
                                    <ul>
                                      <li style={{ lineHeight: "1.5" }}>
                                        <span data-custom-class="body_text">
                                          <span style={{ fontSize: 15 }}>
                                            <strong>To protect our Services.</strong> We
                                            may process your information as part of our
                                            efforts to keep our Services safe and secure,
                                            including fraud monitoring and prevention.
                                          </span>
                                        </span>
                                        <bdt className="statement-end-if-in-editor">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </bdt>
                                      </li>
                                    </ul>
                                    <div style={{ lineHeight: "1.5" }}>
                                      <bdt className="block-component">
                                        <span style={{ fontSize: 15 }}>
                                          <span data-custom-class="body_text" />
                                        </span>
                                      </bdt>
                                      <div style={{ lineHeight: "1.5" }}>
                                        <bdt className="block-component">
                                          <span style={{ fontSize: 15 }}>
                                            <span data-custom-class="body_text" />
                                          </span>
                                        </bdt>
                                        <div style={{ lineHeight: "1.5" }}>
                                          <bdt className="block-component">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </bdt>
                                        </div>
                                        <ul>
                                          <li style={{ lineHeight: "1.5" }}>
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <strong>
                                                  To evaluate and improve our Services,
                                                  products, marketing, and your
                                                  experience.
                                                </strong>{" "}
                                                We may process your information when we
                                                believe it is necessary to identify usage
                                                trends, determine the effectiveness of our
                                                promotional campaigns, and to evaluate and
                                                improve our Services, products, marketing,
                                                and your experience.
                                              </span>
                                            </span>
                                            <bdt className="statement-end-if-in-editor">
                                              <span style={{ fontSize: 15 }}>
                                                <span data-custom-class="body_text" />
                                              </span>
                                            </bdt>
                                          </li>
                                        </ul>
                                        <div style={{ lineHeight: "1.5" }}>
                                          <bdt className="block-component">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </bdt>
                                        </div>
                                        <ul>
                                          <li style={{ lineHeight: "1.5" }}>
                                            <span data-custom-class="body_text">
                                              <span style={{ fontSize: 15 }}>
                                                <strong>To identify usage trends.</strong>{" "}
                                                We may process information about how you
                                                use our Services to better understand how
                                                they are being used so we can improve
                                                them.
                                              </span>
                                            </span>
                                            <bdt className="statement-end-if-in-editor">
                                              <span style={{ fontSize: 15 }}>
                                                <span data-custom-class="body_text" />
                                              </span>
                                            </bdt>
                                          </li>
                                        </ul>
                                        <div style={{ lineHeight: "1.5" }}>
                                          <bdt className="block-component">
                                            <span style={{ fontSize: 15 }}>
                                              <span data-custom-class="body_text" />
                                            </span>
                                          </bdt>
                                          <div style={{ lineHeight: "1.5" }}>
                                            <bdt className="block-component">
                                              <span style={{ fontSize: 15 }}>
                                                <span data-custom-class="body_text" />
                                              </span>
                                            </bdt>
                                            <div style={{ lineHeight: "1.5" }}>
                                              <bdt className="block-component">
                                                <span style={{ fontSize: 15 }}>
                                                  <span data-custom-class="body_text" />
                                                </span>
                                              </bdt>
                                              <div style={{ lineHeight: "1.5" }}>
                                                <bdt className="block-component">
                                                  <span style={{ fontSize: 15 }}>
                                                    <span data-custom-class="body_text" />
                                                  </span>
                                                </bdt>
                                                <div style={{ lineHeight: "1.5" }}>
                                                  <bdt className="block-component">
                                                    <span style={{ fontSize: 15 }}>
                                                      <span data-custom-class="body_text" />
                                                    </span>
                                                  </bdt>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <bdt className="block-component">
                                                      <span style={{ fontSize: 15 }}>
                                                        <span data-custom-class="body_text" />
                                                      </span>
                                                    </bdt>
                                                    <bdt className="block-component">
                                                      <span style={{ fontSize: 15 }}>
                                                        <span data-custom-class="body_text" />
                                                      </span>
                                                    </bdt>
                                                    <bdt className="block-component">
                                                      <span style={{ fontSize: 15 }}>
                                                        <span data-custom-class="body_text" />
                                                      </span>
                                                    </bdt>
                                                    <bdt className="block-component">
                                                      <span style={{ fontSize: 15 }}>
                                                        <span data-custom-class="body_text" />
                                                      </span>
                                                    </bdt>
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <br />
                                                  </div>
                                                  <div
                                                    id="whoshare"
                                                    style={{ lineHeight: "1.5" }}
                                                  >
                                                    <span
                                                      style={{
                                                        color: "rgb(127, 127, 127)"
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          color: "rgb(89, 89, 89)",
                                                          fontSize: 15
                                                        }}
                                                      >
                                                        <span
                                                          style={{
                                                            fontSize: 15,
                                                            color: "rgb(89, 89, 89)"
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              fontSize: 15,
                                                              color: "rgb(89, 89, 89)"
                                                            }}
                                                          >
                                                            <span
                                                              id="control"
                                                              style={{
                                                                color: "rgb(0, 0, 0)"
                                                              }}
                                                            >
                                                              <strong>
                                                                <span data-custom-class="heading_1">
                                                                  3. WHEN AND WITH WHOM DO
                                                                  WE SHARE YOUR PERSONAL
                                                                  INFORMATION?
                                                                </span>
                                                              </strong>
                                                            </span>
                                                          </span>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <br />
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color: "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <strong>
                                                            <em>In Short:</em>
                                                          </strong>
                                                          <em>
                                                            &nbsp;We may share information
                                                            in specific situations
                                                            described in this section
                                                            and/or with the following{" "}
                                                            <bdt className="block-component" />
                                                            third parties.
                                                          </em>
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <span
                                                      style={{
                                                        fontSize: 15,
                                                        color: "rgb(89, 89, 89)"
                                                      }}
                                                    >
                                                      <span
                                                        style={{
                                                          fontSize: 15,
                                                          color: "rgb(89, 89, 89)"
                                                        }}
                                                      >
                                                        <span data-custom-class="body_text">
                                                          <bdt className="block-component" />
                                                        </span>
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <br />
                                                  </div>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <span style={{ fontSize: 15 }}>
                                                      <span data-custom-class="body_text">
                                                        We{" "}
                                                        <bdt className="block-component" />
                                                        may need to share your personal
                                                        information in the following
                                                        situations:
                                                      </span>
                                                    </span>
                                                  </div>
                                                  <ul>
                                                    <li style={{ lineHeight: "1.5" }}>
                                                      <span style={{ fontSize: 15 }}>
                                                        <span data-custom-class="body_text">
                                                          <strong>
                                                            Business Transfers.
                                                          </strong>{" "}
                                                          We may share or transfer your
                                                          information in connection with,
                                                          or during negotiations of, any
                                                          merger, sale of company assets,
                                                          financing, or acquisition of all
                                                          or a portion of our business to
                                                          another company.
                                                        </span>
                                                      </span>
                                                    </li>
                                                  </ul>
                                                  <div style={{ lineHeight: "1.5" }}>
                                                    <span style={{ fontSize: 15 }}>
                                                      <span data-custom-class="body_text">
                                                        <bdt className="block-component" />
                                                      </span>
                                                    </span>
                                                    <div style={{ lineHeight: "1.5" }}>
                                                      <span style={{ fontSize: 15 }}>
                                                        <bdt className="block-component">
                                                          <span data-custom-class="body_text" />
                                                        </bdt>
                                                      </span>
                                                      <div style={{ lineHeight: "1.5" }}>
                                                        <bdt className="block-component">
                                                          <span style={{ fontSize: 15 }}>
                                                            <span data-custom-class="body_text" />
                                                          </span>
                                                        </bdt>
                                                        <div
                                                          style={{ lineHeight: "1.5" }}
                                                        >
                                                          <bdt className="block-component">
                                                            <span
                                                              style={{ fontSize: 15 }}
                                                            >
                                                              <span data-custom-class="body_text" />
                                                            </span>
                                                          </bdt>
                                                          <div
                                                            style={{ lineHeight: "1.5" }}
                                                          >
                                                            <bdt className="block-component">
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="body_text" />
                                                              </span>
                                                            </bdt>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <bdt className="block-component">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(89, 89, 89)",
                                                                  fontSize: 15
                                                                }}
                                                              >
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <bdt className="block-component">
                                                                          <span data-custom-class="heading_1" />
                                                                        </bdt>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="cookies"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            4. DO WE USE
                                                                            COOKIES AND
                                                                            OTHER TRACKING
                                                                            TECHNOLOGIES?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>In Short:</em>
                                                                    </strong>
                                                                    <em>
                                                                      &nbsp;We may use
                                                                      cookies and other
                                                                      tracking
                                                                      technologies to
                                                                      collect and store
                                                                      your information.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We may use cookies and
                                                                    similar tracking
                                                                    technologies (like web
                                                                    beacons and pixels) to
                                                                    access or store
                                                                    information. Specific
                                                                    information about how
                                                                    we use such
                                                                    technologies and how
                                                                    you can refuse certain
                                                                    cookies is set out in
                                                                    our Cookie Notice
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                        .
                                                                      </span>
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)",
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  color:
                                                                                    "rgb(89, 89, 89)"
                                                                                }}
                                                                              >
                                                                                <span data-custom-class="body_text">
                                                                                  <bdt className="statement-end-if-in-editor" />
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)",
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)",
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  "rgb(89, 89, 89)"
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      "rgb(89, 89, 89)"
                                                                                  }}
                                                                                >
                                                                                  <span data-custom-class="body_text">
                                                                                    <bdt className="block-component" />
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="sociallogins"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            5. HOW DO WE
                                                                            HANDLE YOUR
                                                                            SOCIAL LOGINS?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>
                                                                        In Short:&nbsp;
                                                                      </em>
                                                                    </strong>
                                                                    <em>
                                                                      If you choose to
                                                                      register or log in
                                                                      to our Services
                                                                      using a social media
                                                                      account, we may have
                                                                      access to certain
                                                                      information about
                                                                      you.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    Our Services offer you
                                                                    the ability to
                                                                    register and log in
                                                                    using your third-party
                                                                    social media account
                                                                    details (like your
                                                                    Facebook or Twitter
                                                                    logins). Where you
                                                                    choose to do this, we
                                                                    will receive certain
                                                                    profile information
                                                                    about you from your
                                                                    social media provider.
                                                                    The profile
                                                                    information we receive
                                                                    may vary depending on
                                                                    the social media
                                                                    provider concerned,
                                                                    but will often include
                                                                    your name, email
                                                                    address, friends list,
                                                                    and profile picture,
                                                                    as well as other
                                                                    information you choose
                                                                    to make public on such
                                                                    a social media
                                                                    platform.{" "}
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We will use the
                                                                    information we receive
                                                                    only for the purposes
                                                                    that are described in
                                                                    this privacy notice or
                                                                    that are otherwise
                                                                    made clear to you on
                                                                    the relevant Services.
                                                                    Please note that we do
                                                                    not control, and are
                                                                    not responsible for,
                                                                    other uses of your
                                                                    personal information
                                                                    by your third-party
                                                                    social media provider.
                                                                    We recommend that you
                                                                    review their privacy
                                                                    notice to understand
                                                                    how they collect, use,
                                                                    and share your
                                                                    personal information,
                                                                    and how you can set
                                                                    your privacy
                                                                    preferences on their
                                                                    sites and apps.
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)",
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)",
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(89, 89, 89)",
                                                                              fontSize: 15
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  color:
                                                                                    "rgb(89, 89, 89)"
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      color:
                                                                                        "rgb(89, 89, 89)"
                                                                                    }}
                                                                                  >
                                                                                    <span data-custom-class="body_text">
                                                                                      <bdt className="statement-end-if-in-editor" />
                                                                                    </span>
                                                                                    <bdt className="block-component">
                                                                                      <span data-custom-class="body_text">
                                                                                        <bdt className="block-component" />
                                                                                      </span>
                                                                                    </bdt>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="inforetain"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            6. HOW LONG DO
                                                                            WE KEEP YOUR
                                                                            INFORMATION?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>
                                                                        In Short:&nbsp;
                                                                      </em>
                                                                    </strong>
                                                                    <em>
                                                                      We keep your
                                                                      information for as
                                                                      long as necessary to{" "}
                                                                      <bdt className="block-component" />
                                                                      fulfill
                                                                      <bdt className="statement-end-if-in-editor" />{" "}
                                                                      the purposes
                                                                      outlined in this
                                                                      privacy notice
                                                                      unless otherwise
                                                                      required by law.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We will only keep your
                                                                    personal information
                                                                    for as long as it is
                                                                    necessary for the
                                                                    purposes set out in
                                                                    this privacy notice,
                                                                    unless a longer
                                                                    retention period is
                                                                    required or permitted
                                                                    by law (such as tax,
                                                                    accounting, or other
                                                                    legal requirements).
                                                                    <bdt className="block-component" />{" "}
                                                                    No purpose in this
                                                                    notice will require us
                                                                    keeping your personal
                                                                    information for longer
                                                                    than{" "}
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="block-component" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                    <bdt className="block-component" />
                                                                    <bdt className="question">
                                                                      twelve (12)
                                                                    </bdt>{" "}
                                                                    months past the start
                                                                    of the idle period of
                                                                    the user's account
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="else-block" />
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                    .
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    When we have no
                                                                    ongoing legitimate
                                                                    business need to
                                                                    process your personal
                                                                    information, we will
                                                                    either delete or{" "}
                                                                    <bdt className="block-component" />
                                                                    anonymize
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    such information, or,
                                                                    if this is not
                                                                    possible (for example,
                                                                    because your personal
                                                                    information has been
                                                                    stored in backup
                                                                    archives), then we
                                                                    will securely store
                                                                    your personal
                                                                    information and
                                                                    isolate it from any
                                                                    further processing
                                                                    until deletion is
                                                                    possible.
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <bdt className="block-component" />
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="infosafe"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            7. HOW DO WE
                                                                            KEEP YOUR
                                                                            INFORMATION
                                                                            SAFE?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>
                                                                        In Short:&nbsp;
                                                                      </em>
                                                                    </strong>
                                                                    <em>
                                                                      We aim to protect
                                                                      your personal
                                                                      information through
                                                                      a system of{" "}
                                                                      <bdt className="block-component" />
                                                                      organizational
                                                                      <bdt className="statement-end-if-in-editor" />{" "}
                                                                      and technical
                                                                      security measures.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We have implemented
                                                                    appropriate and
                                                                    reasonable technical
                                                                    and{" "}
                                                                    <bdt className="block-component" />
                                                                    organizational
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    security measures
                                                                    designed to protect
                                                                    the security of any
                                                                    personal information
                                                                    we process. However,
                                                                    despite our safeguards
                                                                    and efforts to secure
                                                                    your information, no
                                                                    electronic
                                                                    transmission over the
                                                                    Internet or
                                                                    information storage
                                                                    technology can be
                                                                    guaranteed to be 100%
                                                                    secure, so we cannot
                                                                    promise or guarantee
                                                                    that hackers,
                                                                    cybercriminals, or
                                                                    other{" "}
                                                                    <bdt className="block-component" />
                                                                    unauthorized
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    third parties will not
                                                                    be able to defeat our
                                                                    security and
                                                                    improperly collect,
                                                                    access, steal, or
                                                                    modify your
                                                                    information. Although
                                                                    we will do our best to
                                                                    protect your personal
                                                                    information,
                                                                    transmission of
                                                                    personal information
                                                                    to and from our
                                                                    Services is at your
                                                                    own risk. You should
                                                                    only access the
                                                                    Services within a
                                                                    secure environment.
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <bdt className="statement-end-if-in-editor" />
                                                                    </span>
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="infominors"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            8. DO WE
                                                                            COLLECT
                                                                            INFORMATION
                                                                            FROM MINORS?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>In Short:</em>
                                                                    </strong>
                                                                    <em>
                                                                      &nbsp;We do not
                                                                      knowingly collect
                                                                      data from or market
                                                                      to{" "}
                                                                      <bdt className="block-component" />
                                                                      children under 18
                                                                      years of age
                                                                      <bdt className="else-block" />
                                                                      .
                                                                    </em>
                                                                    <bdt className="block-component" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We do not knowingly
                                                                    solicit data from or
                                                                    market to children
                                                                    under 18 years of age.
                                                                    By using the Services,
                                                                    you represent that you
                                                                    are at least 18 or
                                                                    that you are the
                                                                    parent or guardian of
                                                                    such a minor and
                                                                    consent to such minor
                                                                    dependent’s use of the
                                                                    Services. If we learn
                                                                    that personal
                                                                    information from users
                                                                    less than 18 years of
                                                                    age has been
                                                                    collected, we will
                                                                    deactivate the account
                                                                    and take reasonable
                                                                    measures to promptly
                                                                    delete such data from
                                                                    our records. If you
                                                                    become aware of any
                                                                    data we may have
                                                                    collected from
                                                                    children under age 18,
                                                                    please contact us at{" "}
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                        <bdt className="question">
                                                                          bllipps199@gmail.com
                                                                        </bdt>
                                                                        <bdt className="else-block" />
                                                                      </span>
                                                                    </span>
                                                                    .
                                                                  </span>
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="else-block" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="privacyrights"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            9. WHAT ARE
                                                                            YOUR PRIVACY
                                                                            RIGHTS?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>In Short:</em>
                                                                    </strong>
                                                                    <em>
                                                                      &nbsp;
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span data-custom-class="body_text">
                                                                            <em>
                                                                              <bdt className="block-component" />
                                                                            </em>
                                                                          </span>
                                                                        </span>
                                                                        &nbsp;
                                                                      </span>
                                                                      You may review,
                                                                      change, or terminate
                                                                      your account at any
                                                                      time.
                                                                    </em>
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <bdt className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                &nbsp;
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    If you are located in
                                                                    the EEA or UK and you
                                                                    believe we are
                                                                    unlawfully processing
                                                                    your personal
                                                                    information, you also
                                                                    have the right to
                                                                    complain to your local
                                                                    data protection
                                                                    supervisory authority.
                                                                    You can find their
                                                                    contact details here:{" "}
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(48, 48, 241)"
                                                                            }}
                                                                          >
                                                                            <span data-custom-class="body_text">
                                                                              <a
                                                                                data-custom-class="link"
                                                                                href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"
                                                                                rel="noopener noreferrer"
                                                                                target="_blank"
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    fontSize: 15
                                                                                  }}
                                                                                >
                                                                                  https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
                                                                                </span>
                                                                              </a>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                    .
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    If you are located in
                                                                    Switzerland, the
                                                                    contact details for
                                                                    the data protection
                                                                    authorities are
                                                                    available here:{" "}
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(48, 48, 241)"
                                                                            }}
                                                                          >
                                                                            <span data-custom-class="body_text">
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15
                                                                                }}
                                                                              >
                                                                                <a
                                                                                  data-custom-class="link"
                                                                                  href="https://www.edoeb.admin.ch/edoeb/en/home.html"
                                                                                  rel="noopener noreferrer"
                                                                                  target="_blank"
                                                                                >
                                                                                  https://www.edoeb.admin.ch/edoeb/en/home.html
                                                                                </a>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                    .
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="withdrawconsent"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <u>
                                                                        Withdrawing your
                                                                        consent:
                                                                      </u>
                                                                    </strong>{" "}
                                                                    If we are relying on
                                                                    your consent to
                                                                    process your personal
                                                                    information,
                                                                    <bdt className="block-component" />{" "}
                                                                    which may be express
                                                                    and/or implied consent
                                                                    depending on the
                                                                    applicable law,
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    you have the right to
                                                                    withdraw your consent
                                                                    at any time. You can
                                                                    withdraw your consent
                                                                    at any time by
                                                                    contacting us by using
                                                                    the contact details
                                                                    provided in the
                                                                    section{" "}
                                                                    <bdt className="block-component" />
                                                                    "
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <a
                                                                data-custom-class="link"
                                                                href="#contact"
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span data-custom-class="body_text">
                                                                      HOW CAN YOU CONTACT
                                                                      US ABOUT THIS
                                                                      NOTICE?
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </a>
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component" />
                                                                    "
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    below
                                                                    <bdt className="block-component" />
                                                                    .
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  However, please note
                                                                  that this will not
                                                                  affect the lawfulness of
                                                                  the processing before
                                                                  its withdrawal nor,
                                                                  <bdt className="block-component" />{" "}
                                                                  when applicable law
                                                                  allows,
                                                                  <bdt className="statement-end-if-in-editor" />{" "}
                                                                  will it affect the
                                                                  processing of your
                                                                  personal information
                                                                  conducted in reliance on
                                                                  lawful processing
                                                                  grounds other than
                                                                  consent.
                                                                  <bdt className="block-component" />
                                                                </span>
                                                              </span>
                                                              <bdt className="block-component">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="heading_2">
                                                                  <strong>
                                                                    Account Information
                                                                  </strong>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  If you would at any time
                                                                  like to review or change
                                                                  the information in your
                                                                  account or terminate
                                                                  your account, you can:
                                                                  <bdt className="forloop-component" />
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <ul>
                                                              <li
                                                                style={{
                                                                  lineHeight: "1.5"
                                                                }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <bdt className="question">
                                                                      Contact us using the
                                                                      contact information
                                                                      provided.
                                                                    </bdt>
                                                                  </span>
                                                                </span>
                                                              </li>
                                                            </ul>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <bdt className="forloop-component" />
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  Upon your request to
                                                                  terminate your account,
                                                                  we will deactivate or
                                                                  delete your account and
                                                                  information from our
                                                                  active databases.
                                                                  However, we may retain
                                                                  some information in our
                                                                  files to prevent fraud,
                                                                  troubleshoot problems,
                                                                  assist with any
                                                                  investigations, enforce
                                                                  our legal terms and/or
                                                                  comply with applicable
                                                                  legal requirements.
                                                                </span>
                                                              </span>
                                                              <bdt className="statement-end-if-in-editor">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            fontSize: 15
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span data-custom-class="body_text">
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      "rgb(89, 89, 89)"
                                                                                  }}
                                                                                >
                                                                                  <bdt className="block-component" />
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <u>
                                                                        Cookies and
                                                                        similar
                                                                        technologies:
                                                                      </u>
                                                                    </strong>{" "}
                                                                    Most Web browsers are
                                                                    set to accept cookies
                                                                    by default. If you
                                                                    prefer, you can
                                                                    usually choose to set
                                                                    your browser to remove
                                                                    cookies and to reject
                                                                    cookies. If you choose
                                                                    to remove cookies or
                                                                    reject cookies, this
                                                                    could affect certain
                                                                    features or services
                                                                    of our Services. To
                                                                    opt out of
                                                                    interest-based
                                                                    advertising by
                                                                    advertisers on our
                                                                    Services visit{" "}
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(48, 48, 241)"
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <a
                                                                          data-custom-class="link"
                                                                          href="http://www.aboutads.info/choices/"
                                                                          rel="noopener noreferrer"
                                                                          target="_blank"
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15
                                                                            }}
                                                                          >
                                                                            http://www.aboutads.info/choices/
                                                                          </span>
                                                                        </a>
                                                                      </span>
                                                                    </span>
                                                                    .{" "}
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="block-component" />
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                color:
                                                                                  "rgb(89, 89, 89)"
                                                                              }}
                                                                            >
                                                                              <span
                                                                                style={{
                                                                                  fontSize: 15
                                                                                }}
                                                                              >
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      "rgb(89, 89, 89)"
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15
                                                                                    }}
                                                                                  >
                                                                                    <span
                                                                                      style={{
                                                                                        color:
                                                                                          "rgb(89, 89, 89)"
                                                                                      }}
                                                                                    >
                                                                                      <bdt className="statement-end-if-in-editor" />
                                                                                    </span>
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <bdt className="block-component">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span data-custom-class="body_text">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  If you have questions or
                                                                  comments about your
                                                                  privacy rights, you may
                                                                  email us at{" "}
                                                                  <bdt className="question">
                                                                    bllipps199@gmail.com
                                                                  </bdt>
                                                                  .
                                                                </span>
                                                              </span>
                                                              <bdt className="statement-end-if-in-editor">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="DNT"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            10. CONTROLS
                                                                            FOR
                                                                            DO-NOT-TRACK
                                                                            FEATURES
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    Most web browsers and
                                                                    some mobile operating
                                                                    systems and mobile
                                                                    applications include a
                                                                    Do-Not-Track (
                                                                    <bdt className="block-component" />
                                                                    "DNT"
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    ) feature or setting
                                                                    you can activate to
                                                                    signal your privacy
                                                                    preference not to have
                                                                    data about your online
                                                                    browsing activities
                                                                    monitored and
                                                                    collected. At this
                                                                    stage no uniform
                                                                    technology standard
                                                                    for{" "}
                                                                    <bdt className="block-component" />
                                                                    recognizing
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    and implementing DNT
                                                                    signals has been{" "}
                                                                    <bdt className="block-component" />
                                                                    finalized
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    . As such, we do not
                                                                    currently respond to
                                                                    DNT browser signals or
                                                                    any other mechanism
                                                                    that automatically
                                                                    communicates your
                                                                    choice not to be
                                                                    tracked online. If a
                                                                    standard for online
                                                                    tracking is adopted
                                                                    that we must follow in
                                                                    the future, we will
                                                                    inform you about that
                                                                    practice in a revised
                                                                    version of this
                                                                    privacy notice.
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="caresidents"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            11. DO
                                                                            CALIFORNIA
                                                                            RESIDENTS HAVE
                                                                            SPECIFIC
                                                                            PRIVACY
                                                                            RIGHTS?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <strong>
                                                                      <em>
                                                                        In Short:&nbsp;
                                                                      </em>
                                                                    </strong>
                                                                    <em>
                                                                      Yes, if you are a
                                                                      resident of
                                                                      California, you are
                                                                      granted specific
                                                                      rights regarding
                                                                      access to your
                                                                      personal
                                                                      information.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    California Civil Code
                                                                    Section 1798.83, also
                                                                    known as the{" "}
                                                                    <bdt className="block-component" />
                                                                    "Shine The Light"
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    law, permits our users
                                                                    who are California
                                                                    residents to request
                                                                    and obtain from us,
                                                                    once a year and free
                                                                    of charge, information
                                                                    about categories of
                                                                    personal information
                                                                    (if any) we disclosed
                                                                    to third parties for
                                                                    direct marketing
                                                                    purposes and the names
                                                                    and addresses of all
                                                                    third parties with
                                                                    which we shared
                                                                    personal information
                                                                    in the immediately
                                                                    preceding calendar
                                                                    year. If you are a
                                                                    California resident
                                                                    and would like to make
                                                                    such a request, please
                                                                    submit your request in
                                                                    writing to us using
                                                                    the contact
                                                                    information provided
                                                                    below.
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    If you are under 18
                                                                    years of age, reside
                                                                    in California, and
                                                                    have a registered
                                                                    account with Services,
                                                                    you have the right to
                                                                    request removal of
                                                                    unwanted data that you
                                                                    publicly post on the
                                                                    Services. To request
                                                                    removal of such data,
                                                                    please contact us
                                                                    using the contact
                                                                    information provided
                                                                    below and include the
                                                                    email address
                                                                    associated with your
                                                                    account and a
                                                                    statement that you
                                                                    reside in California.
                                                                    We will make sure the
                                                                    data is not publicly
                                                                    displayed on the
                                                                    Services, but please
                                                                    be aware that the data
                                                                    may not be completely
                                                                    or comprehensively
                                                                    removed from all our
                                                                    systems (e.g.
                                                                    <bdt className="block-component" />
                                                                    ,
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    backups, etc.).
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <bdt className="block-component">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                />
                                                              </bdt>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="policyupdates"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            12. DO WE MAKE
                                                                            UPDATES TO
                                                                            THIS NOTICE?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <em>
                                                                      <strong>
                                                                        In Short:&nbsp;
                                                                      </strong>
                                                                      Yes, we will update
                                                                      this notice as
                                                                      necessary to stay
                                                                      compliant with
                                                                      relevant laws.
                                                                    </em>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    We may update this
                                                                    privacy notice from
                                                                    time to time. The
                                                                    updated version will
                                                                    be indicated by an
                                                                    updated{" "}
                                                                    <bdt className="block-component" />
                                                                    "Revised"
                                                                    <bdt className="statement-end-if-in-editor" />{" "}
                                                                    date and the updated
                                                                    version will be
                                                                    effective as soon as
                                                                    it is accessible. If
                                                                    we make material
                                                                    changes to this
                                                                    privacy notice, we may
                                                                    notify you either by
                                                                    prominently posting a
                                                                    notice of such changes
                                                                    or by directly sending
                                                                    you a notification. We
                                                                    encourage you to
                                                                    review this privacy
                                                                    notice frequently to
                                                                    be informed of how we
                                                                    are protecting your
                                                                    information.
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="contact"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            13. HOW CAN
                                                                            YOU CONTACT US
                                                                            ABOUT THIS
                                                                            NOTICE?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    If you have questions
                                                                    or comments about this
                                                                    notice, you may{" "}
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                        email us at{" "}
                                                                        <bdt className="question">
                                                                          bllipps199@gmail.com
                                                                        </bdt>
                                                                        <bdt className="statement-end-if-in-editor" />
                                                                      </span>
                                                                    </span>
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15,
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          &nbsp;or by post
                                                                          to:
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          color:
                                                                            "rgb(89, 89, 89)"
                                                                        }}
                                                                      >
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)"
                                                                          }}
                                                                        >
                                                                          <span data-custom-class="body_text">
                                                                            <bdt className="question">
                                                                              TkGamers
                                                                            </bdt>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span data-custom-class="body_text">
                                                                        <bdt className="block-component" />
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <bdt className="question">
                                                                    __________
                                                                  </bdt>
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <bdt className="block-component" />
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <span data-custom-class="body_text">
                                                                  <bdt className="question">
                                                                    __________
                                                                  </bdt>
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <bdt className="block-component" />
                                                                      <bdt className="block-component" />
                                                                      ,{" "}
                                                                      <bdt className="question">
                                                                        OH
                                                                      </bdt>
                                                                      <bdt className="statement-end-if-in-editor" />
                                                                      <bdt className="block-component" />
                                                                      <bdt className="block-component" />{" "}
                                                                      <bdt className="question">
                                                                        44601
                                                                      </bdt>
                                                                      <bdt className="statement-end-if-in-editor" />
                                                                      <bdt className="block-component" />
                                                                      <bdt className="block-component" />
                                                                      <bdt className="block-component" />
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                data-custom-class="body_text"
                                                                style={{ fontSize: 15 }}
                                                              >
                                                                <bdt className="question">
                                                                  United States
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <span
                                                                            style={{
                                                                              color:
                                                                                "rgb(89, 89, 89)"
                                                                            }}
                                                                          >
                                                                            <span
                                                                              style={{
                                                                                fontSize: 15
                                                                              }}
                                                                            >
                                                                              <span data-custom-class="body_text">
                                                                                <span
                                                                                  style={{
                                                                                    color:
                                                                                      "rgb(89, 89, 89)"
                                                                                  }}
                                                                                >
                                                                                  <span
                                                                                    style={{
                                                                                      fontSize: 15
                                                                                    }}
                                                                                  >
                                                                                    <bdt className="statement-end-if-in-editor" />
                                                                                  </span>
                                                                                </span>
                                                                              </span>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </bdt>
                                                              </span>
                                                              <bdt className="block-component">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text" />
                                                                </span>
                                                              </bdt>
                                                              <bdt className="statement-end-if-in-editor" />
                                                              <span data-custom-class="body_text">
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15
                                                                    }}
                                                                  >
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                  </span>
                                                                </span>
                                                              </span>
                                                              <span data-custom-class="body_text">
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <bdt className="statement-end-if-in-editor">
                                                                        <span
                                                                          style={{
                                                                            color:
                                                                              "rgb(89, 89, 89)"
                                                                          }}
                                                                        >
                                                                          <span
                                                                            style={{
                                                                              fontSize: 15
                                                                            }}
                                                                          >
                                                                            <span data-custom-class="body_text">
                                                                              <bdt className="block-component">
                                                                                <bdt className="block-component" />
                                                                              </bdt>
                                                                            </span>
                                                                          </span>
                                                                        </span>
                                                                      </bdt>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                                <span
                                                                  style={{ fontSize: 15 }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <span
                                                                      style={{
                                                                        color:
                                                                          "rgb(89, 89, 89)",
                                                                        fontSize: 15
                                                                      }}
                                                                    >
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <span data-custom-class="body_text">
                                                                          <bdt className="statement-end-if-in-editor">
                                                                            <bdt className="block-component" />
                                                                          </bdt>
                                                                        </span>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              id="request"
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  color:
                                                                    "rgb(127, 127, 127)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    color:
                                                                      "rgb(89, 89, 89)",
                                                                    fontSize: 15
                                                                  }}
                                                                >
                                                                  <span
                                                                    style={{
                                                                      fontSize: 15,
                                                                      color:
                                                                        "rgb(89, 89, 89)"
                                                                    }}
                                                                  >
                                                                    <span
                                                                      style={{
                                                                        fontSize: 15,
                                                                        color:
                                                                          "rgb(89, 89, 89)"
                                                                      }}
                                                                    >
                                                                      <span
                                                                        id="control"
                                                                        style={{
                                                                          color:
                                                                            "rgb(0, 0, 0)"
                                                                        }}
                                                                      >
                                                                        <strong>
                                                                          <span data-custom-class="heading_1">
                                                                            14. HOW CAN
                                                                            YOU REVIEW,
                                                                            UPDATE, OR
                                                                            DELETE THE
                                                                            DATA WE
                                                                            COLLECT FROM
                                                                            YOU?
                                                                          </span>
                                                                        </strong>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                </span>
                                                              </span>
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <br />
                                                            </div>
                                                            <div
                                                              style={{
                                                                lineHeight: "1.5"
                                                              }}
                                                            >
                                                              <span
                                                                style={{
                                                                  fontSize: 15,
                                                                  color: "rgb(89, 89, 89)"
                                                                }}
                                                              >
                                                                <span
                                                                  style={{
                                                                    fontSize: 15,
                                                                    color:
                                                                      "rgb(89, 89, 89)"
                                                                  }}
                                                                >
                                                                  <span data-custom-class="body_text">
                                                                    <bdt className="block-component" />
                                                                    You have the right to
                                                                    request access to the
                                                                    personal information
                                                                    we collect from you,
                                                                    change that
                                                                    information, or delete
                                                                    it.{" "}
                                                                    <bdt className="statement-end-if-in-editor" />
                                                                    To request to review,
                                                                    update, or delete your
                                                                    personal information,
                                                                    please{" "}
                                                                    <bdt className="block-component" />
                                                                    fill out and submit
                                                                    a&nbsp;
                                                                  </span>
                                                                  <span
                                                                    style={{
                                                                      color:
                                                                        "rgb(48, 48, 241)"
                                                                    }}
                                                                  >
                                                                    <span data-custom-class="body_text">
                                                                      <span
                                                                        style={{
                                                                          fontSize: 15
                                                                        }}
                                                                      >
                                                                        <a
                                                                          data-custom-class="link"
                                                                          href="https://app.termly.io/notify/2fc53150-8bf3-4fb1-972f-e2cd464eec1d"
                                                                          rel="noopener noreferrer"
                                                                          target="_blank"
                                                                        >
                                                                          data subject
                                                                          access request
                                                                        </a>
                                                                      </span>
                                                                    </span>
                                                                  </span>
                                                                  <bdt className="block-component">
                                                                    <span data-custom-class="body_text" />
                                                                  </bdt>
                                                                </span>
                                                              </span>
                                                              <span data-custom-class="body_text">
                                                                .
                                                              </span>
                                                            </div>
                                                            <style
                                                              dangerouslySetInnerHTML={{
                                                                __html:
                                                                  "\n      ul {\n        list-style-type: square;\n      }\n      ul > li > ul {\n        list-style-type: circle;\n      }\n      ul > li > ul > li > ul {\n        list-style-type: square;\n      }\n      ol li {\n        font-family: Arial ;\n      }\n    "
                                                              }}
                                                            />
                                                          </div>
                                                          <div
                                                            style={{
                                                              color: "#595959",
                                                              fontSize: 14,
                                                              fontFamily: "Arial",
                                                              paddingTop: 16
                                                            }}
                                                          >
                                                            This privacy policy was
                                                            created using Termly's{" "}
                                                            <a
                                                              style={{
                                                                color:
                                                                  "rgb(48, 48, 241) !important"
                                                              }}
                                                              href="https://termly.io/products/privacy-policy-generator/"
                                                            >
                                                              Privacy Policy Generator
                                                            </a>
                                                            .
                                                          </div>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </View>
    </Card>
    );
}


export default PrivacyPolicy;