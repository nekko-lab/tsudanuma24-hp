import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import Console from "~/components/console";
import Header from "~/components/header";
import Heading from "~/components/heading";
import { css } from "~/styled-system/css";
import { Gradient } from "~/components/gradient.mjs";
import { TimeTable } from "~/components/timeTable";
import { Block } from "~/components/block";
import { Section } from "~/components/section";
import { ListBlock } from "~/components/listblock";
import { Caution, TimeLine } from "~/components/data";
import Footer from "~/components/footer";
import { animate } from "motion";
import Map from "./map.png?jsx";
import Character from "./character.png?jsx";

export default component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(async () => {
    const gradient = new Gradient();
    gradient.el = document.querySelector("#gradient-canvas");
    gradient.connect();
  });

  const base_delay = 0.4;

  return (
    <>
      {/* Word Break */}
      <script src="https://unpkg.com/budoux/bundle/budoux-ja.min.js" />
      <Header />

      {/* --- background gradient --- */}
      <canvas
        id="gradient-canvas"
        data-transition-in
        class={css({
          position: "fixed",
          width: "100%",
          height: "150%",
          top: 0,
          left: 0,
          zIndex: -1,
        })}
        onQVisible$={(e) => {
          animate(
            e.detail.target,
            { opacity: [0, 1] },
            { duration: 1, easing: "ease-in-out", delay: 0.5 },
          );
        }}
      />
      <main
        class={css({
          fontFamily: "primary",

          // Word Break
          whiteSpace: "pre-wrap",
          wordBreak: "keep-all",
        })}
      >
        <div
          class={css({
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            height: "calc(100vh - 153px)",
            paddingTop: 153,

            fontSize: { md: "medium", sm: "small", base: 8 },
          })}
        >
          <Console />
        </div>

        {/* --- decoration --- */}
        <div
          class={css({
            position: "fixed",
            width: "100%",
            height: "154px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            // marginX: "35px",
            paddingX: "35px",
            paddingBottom: "20px",
            fontSize: "10px",
          })}
          onQVisible$={(e) => {
            animate(
              e.detail.target,
              { opacity: [0, 1] },
              { duration: 1, easing: "ease-in-out", delay: 0.7 },
            );
          }}
        >
          <div
            class={css({
              display: "flex",
              flexDir: "column",
            })}
          >
            <span>Cyber &lt;/&gt; Music</span>
            <span>November. 23-25</span>
            <span>at CIT Tsudanuma Campus</span>
            <span
              class={css({
                fontFamily: "barcode",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "20px",
              })}
            >
              Nekko Lab
            </span>
          </div>
          <div>2024 &copy; Nekko Lab</div>
        </div>
        <div
          class={css({
            maxW: { xl: 1280, lg: 1024, md: 768, sm: 640, base: "90%" },
            marginX: "auto",
            paddingY: "68px",
          })}
        >
          {/* --- About --- */}
          <Section>
            <Heading value="About" description="イベントについて" />
            <div
              class={css({
                display: "flex",
                gap: { lg: 20, base: 5 },
                flexDir: { lg: "row", base: "column" },
              })}
            >
              <div>
                <Block Title="About this event">
                  {/* Word Break */}
                  <budoux-ja>
                    😎
                    音楽が"まわる"、ステージが"まわる"、自由に体を揺らせる空間へようこそ！
                    😎
                    <br />
                    Cyber &lt;/&gt; Music (サイバー ルート ミュージック)
                    は、音楽と観客が主役になれるDJイベントです。
                    <br />
                    体を解放して音楽とひとつになれる、そんな空間を目指しています。
                    <br />
                    グルーブに乗って自由なムーブメントで踊ろう！
                  </budoux-ja>
                </Block>

                <Block Title="About us">
                  {/* Word Break */}
                  <budoux-ja>
                    ネッコ研は、デジタルコンテンツやシステムを製作する創作×技術系サークルです。
                    <br />
                    現在、以下のチームが活動中！
                  </budoux-ja>
                  <ul
                    class={css({
                      "& li": {
                        listStyleType: "disc",
                        left: "1em",
                        position: "relative",
                        marginTop: "1em",

                        "& h3": {
                          fontSize: "1.2em",
                        },

                        "& p": {
                          marginTop: ".2em",
                        },
                      },
                    })}
                  >
                    <li>
                      <h3>Miku's Origin</h3>
                      {/* Word Break */}
                      <budoux-ja>
                        <p>
                          ボカロオタク達がアツいライブを製作するチーム、Miku's
                          Originです！
                        </p>
                      </budoux-ja>
                    </li>
                    <li>
                      <h3>Nekko Cloud</h3>
                      {/* Word Break */}
                      <budoux-ja>
                        <p>
                          おもしろ実験プライベートクラウド「Nekko
                          Cloud」を開発するチームです！
                        </p>
                      </budoux-ja>
                    </li>
                  </ul>
                </Block>
              </div>
              <div
                class={css({
                  display: "flex",
                  flexDir: "column",
                  alignItems: "center",
                  opacity: 0,
                  transform: "translateX(-10px)",
                  minWidth: "354px",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.5,
                      delay: base_delay + 0.5,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                <Character
                  class={css({
                    margin: { lg: 0, base: "auto" },
                    height: 500,
                    width: "auto",
                  })}
                  alt="キャラクター"
                />
                <p>illusted by 菓子工船</p>
              </div>
            </div>
          </Section>

          {/* --- Attention --- */}
          <Section>
            <Heading value="Attention" description="注意事項" />
            {/* Word Break */}
            <budoux-ja>
              <ListBlock ListBlocks={Caution} />
            </budoux-ja>
          </Section>

          {/* --- TimeTable --- */}
          <Section>
            <Heading value="TimeTable" description="公演時間" />
            <div
              class={css({
                display: { base: "block", md: "flex" },
                justifyContent: "space-between",
              })}
            >
              {TimeLine.map((value, index) => {
                return (
                  <div
                    key={index}
                    class={css({
                      width: "full",
                      marginX: "10px",
                    })}
                  >
                    <TimeTable events={value} header={`day ${index + 1}`} />
                  </div>
                );
              })}
            </div>
          </Section>

          {/* --- Venue --- */}
          <Section>
            <Heading value="Venue" description="開催場所" />
            <budoux-ja>
              <p
                class={css({
                  fontSize: "26px",
                  letterSpacing: "0.02em",
                  opacity: 0,
                  transform: "translateX(-10px)",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.5,
                      delay: base_delay + 0.2,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                千葉工業大学 津田沼キャンパス 6号館 1階 615教室
              </p>
              <div
                class={css({
                  display: "flex",
                  gap: 6,
                  flexDir: { md: "row", base: "column" },
                  alignItems: "center",
                  marginTop: "10px",
                  opacity: 0,
                  transform: "translateX(-10px)",
                })}
                onQVisible$={(e) => {
                  animate(
                    e.detail.target,
                    { opacity: 1, transform: "translateX(0px)" },
                    {
                      duration: 0.6,
                      delay: base_delay + 0.45,
                      easing: "ease-in-out",
                    },
                  );
                }}
              >
                <Map
                  class={css({
                    bg: "#f6f6f6",
                    borderRadius: 5,
                    overflow: "hidden",
                    width: { base: "full" },
                  })}
                  alt="会場案内マップ"
                />
                <iframe
                  class={css({
                    width: "full",
                    height: { base: "500px" },
                    borderRadius: 5,
                    overflow: "hidden",
                  })}
                  title="千葉工業大学のGoogle Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.479229660451!2d140.018525971287!3d35.689822914710305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x602280271c38ab81%3A0x9b26ed71e15bb456!2z5Y2D6JGJ5bel5qWt5aSn5a2mIOa0peeUsOayvOOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1731421291588!5m2!1sja!2sjp"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </budoux-ja>
          </Section>
        </div>
      </main>
      <Footer />
    </>
  );
});

export const head: DocumentHead = {
  title: "Cyber </> Music by Nekko Lab",
  meta: [
    {
      name: "description",
      content:
        '音楽が"まわる"、ステージが"まわる"、自由に体を揺らせる空間へようこそ！\nCyber </> Music (サイバー ルート ミュージック) は、音楽と観客が主役になれるDJイベントです。',
    },
  ],
};
