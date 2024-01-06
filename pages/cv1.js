export default function Home({ isConnected }) {
  return (
    <>
      <div className="vvvv grid grid-cols-5 border-black">
        <div className=" bg-white shadow-lg rounded-lg col-span-1 border-r-2 border-black py-16 h-screen pl-3 ">
          <div className="grid gap-y-16 p-3 ">
            <div className="row-span-1">
              <section className="flex flex-col justify-around">
                <div>
                  <div className="flex flex-row items-center gap-2 mb-4">
                    <div
                      className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl shadow-lg"
                      style={{ backgroundImage: "url(/9.jpg)" }}
                    ></div>
                    <div>
                      <h1 className="text-4xl font-bold">Arash Esnaashari</h1>
                      <h1 className="text-gray-400">
                        18 y/o Front-end Developer
                      </h1>
                    </div>
                  </div>
                </div>
                <div className="h-24 flex flex-col justify-around mt-2">
                  <div className="flex flex-row items-center mb-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <a href="tel:+989198003528" className="text-1xl">
                      919 800 3528
                    </a>
                  </div>

                  <div className="flex flex-row items-center mb-3">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <h1 className="text-1xl">Tehran</h1>
                  </div>

                  <div className="flex flex-row items-center ">
                    <a href="mailto: arash.esnaaashari@gmail.com">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 mr-3"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                        <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/arashesnaashari/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 30 30"
                        className="w-7 h-7 mr-3"
                      >
                        <path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M10.403,11.021 c0.935,0,1.496-0.561,1.496-1.309c0-0.748-0.561-1.309-1.403-1.309C9.561,8.403,9,8.964,9,9.712 C9,10.46,9.561,11.022,10.403,11.021z M9,20h3v-8H9V20z M19.459,12c-1.412,0-2.165,0.465-2.541,1.116V12H14v8h2.917 c0,0,0-4.186,0-4.372c0-1.302,0.942-1.488,1.224-1.488s1.035,0.279,1.035,1.488V20H22v-4.372C22,13.116,20.871,12,19.459,12z" />
                      </svg>
                    </a>
                    <a href="https://github.com/arashesnaashari">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                        viewBox="0 0 30 30"
                        className="w-7 h-7 mr-3"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z" />
                      </svg>
                    </a>
                    <a href="https://www.arashesnaashari.ir/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 mr-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <div className="row-span-1">
              <section className="flex flex-col justify-around">
                <h1 className=" shadow-md text-4xl mb-4 border-b-2 w-5 border-black font-bold">
                  Education
                </h1>
                <div className="flex flex-row items-center gap-2">
                  <div
                    className="bg-no-repeat bg-cover w-16 h-16 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/khu.jfif)" }}
                  ></div>
                  <div>
                    <h1 className="text-1xl">Kharazmi University</h1>
                    <h1 className="text-gray-400 text-sm">
                      Computer Sience{" "}
                      <span className="text-gray-300">2022</span>
                    </h1>
                  </div>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <div
                    className="bg-no-repeat bg-cover w-16 h-16 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/alborz.jfif)" }}
                  ></div>
                  <div>
                    <h1 className="text-1xl">Alborz High School</h1>
                    <h1 className="text-gray-400 text-sm">
                      Math and Physics{" "}
                      <span className="text-gray-300">2019</span>
                    </h1>
                  </div>
                </div>
              </section>
            </div>
            <div className="row-span-1">
              <section className="flex flex-col justify-around">
                <h1 className="text-4xl border-b-2 w-5 border-black shadow-md font-bold">
                  Skills
                </h1>
                <h1 className="text-2xl text-gray-400 mb-3 mt-6">javaScript</h1>
                <div className="flex flex-row items-center">
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/js.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/ts.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/node.png)" }}
                  ></div>
                </div>
                <h1 className="text-2xl text-gray-400 mb-3 mt-6">React</h1>
                <div className="flex flex-row items-center">
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/react.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/next.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-12 h-12 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/redux.png)" }}
                  ></div>
                </div>{" "}
                <h1 className="text-2xl text-gray-400 mb-3 mt-6">Design</h1>
                <div className="flex flex-row items-center">
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/html.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/css.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/tail.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/boot.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/sass.png)" }}
                  ></div>
                </div>
                <h1 className="text-xl text-gray-400 mb-3 mt-6">
                  Relative to Front-end
                </h1>
                <div className="flex flex-row items-center">
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/jest.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/git.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/graph.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/pwa.png)" }}
                  ></div>
                </div>{" "}
                <h1 className="text-xl text-gray-400 mb-3 mt-6">
                  Other Skills
                </h1>
                <div className="flex flex-row items-center">
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/py.png)" }}
                  ></div>

                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/mongo.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/sql.png)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/docker.webp)" }}
                  ></div>
                  <div
                    className="bg-no-repeat bg-contain mr-2 w-10 h-10 bg-center rounded-xl"
                    style={{ backgroundImage: "url(/kuber.png)" }}
                  ></div>
                </div>
              </section>
            </div>
            {/* <div className="bg-black w-full text-white p-2">
                made with ❤️ and couple of Code
              </div> */}
          </div>
        </div>
        <div className=" col-span-4 mx-auto w-4/5">
          <div className="grid py-16 gap-20">
            <section>
              <div className="w-3/4 mb-20">
                <h1 className="text-5xl mb-16 border-black font-bold">
                  <span className="border-black border-b-2 shadow-md">S</span>
                  oft Skills
                </h1>
                <li className="mb-6 text-2xl font-semibold">
                  Although I had not decided to land a job, in these 4 years I
                  have had several good experiences communicating with people
                  while I was working as a developer.
                </li>
                <li className="mb-6 text-2xl font-semibold">
                  As I have an ESTJ personality it is so important for me to do
                  the job soon and in the best way I can and by that, I consider
                  myself a responsible person.
                </li>
                <li className="mb-6 text-2xl font-semibold">
                  Beside Front-end development as I'm so passioned about
                  learning new technologies and facing new challenges , I spent
                  these 4 years learning Back-end Development and DevOps by
                  studying online with YouTube and documentation <br></br>I
                  recently started learning ML with books.
                </li>
                <li className="mb-6 text-2xl font-bold">
                  There are three reasons I'm applying for this job:
                  <p className="mt-4 font-semibold ">
                    - first is my passion to learn the business and see how a
                    startup works
                  </p>
                  <p className="mt-4 font-semibold">
                    - the second one is about the company's field which is AI
                    and as I'm new to AI and want to learn more I consider this
                    opportunity a good place to develop my skills
                  </p>
                  <p className="mt-4 font-semibold">
                    - and the third and most important one is the company's team
                    and conditions
                  </p>
                </li>
              </div>
              <h1 className="text-5xl mb-16 border-black font-bold">
                <span className="border-black border-b-2 shadow-md shadow-gray-300">
                  P
                </span>
                rojects
              </h1>
              <div className="w-3/4 mb-20">
                <section className=" flex flex-col bg-white mb-8 rounded-2xl p-8">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://github.com/arashesnaashari/bookgram">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/github.png)" }}
                      ></div>
                    </a>
                    <div className="w-full">
                      <h1 className=" text-4xl flex flex-row items-center justify-between">
                        Bookgram
                        <a href="https://github.com/arashesnaashari/bookgram">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 ml-3 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </a>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          nextjs
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          nodejs
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          mongodb
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          contextApi
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          responsive
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          tailwind
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          swr
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    Blog + Ecommerece where you can read and share your idea
                    about books
                  </div>
                </section>
                <section className="flex flex-col bg-white mb-8 rounded-2xl p-8">
                  <div className="flex flex-row items-center">
                    <a href="https://github.com/arashesnaashari/twitter_clone">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/github.png)" }}
                      ></div>
                    </a>
                    <div className="w-full">
                      <h1 className="text-4xl flex flex-row items-center justify-between">
                        Social Media
                        <a href="https://github.com/arashesnaashari/twitter_clone">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 ml-3 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </a>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          nextjs
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          nodejs
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          mongodb
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          contextApi
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          tailwind
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          iron-session
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    Social Media for sharing gradiant design
                  </div>
                </section>
                <section className="flex flex-col bg-white mb-8 rounded-2xl p-8">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://github.com/arashesnaashari/friendschat">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/github.png)" }}
                      ></div>
                    </a>
                    <div className="w-full">
                      <h1 className="text-4xl flex flex-row items-center justify-between">
                        Friends Chat
                        <a href="https://github.com/arashesnaashari/friendschat">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 ml-3 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </a>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          react
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          socket
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          nodejs
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          webRTC
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          redux
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    a place where friends can chat and video call , I'm
                    currently working on it
                  </div>
                </section>

                <section className="flex flex-col bg-white mb-8 rounded-2xl p-8">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://github.com/arashesnaashari/blockchain">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/github.png)" }}
                      ></div>
                    </a>
                    <div className="w-full">
                      <h1 className="text-4xl flex flex-row items-center justify-between">
                        fake blockchain
                        <a href="https://github.com/arashesnaashari/blockchain-scan">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 ml-3 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </a>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          react
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          contextApi
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          tailwind
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          typeScript
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    just a challenge with typeScript and contextApi to mock the
                    blockchain functionality
                  </div>
                </section>
                <section className="flex flex-col bg-white mb-8 rounded-2xl p-8">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://github.com/arashesnaashari/quera_todolist">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/github.png)" }}
                      ></div>
                    </a>
                    <div className="w-full">
                      <h1 className="text-4xl flex flex-row items-center justify-between">
                        pure js toDo-list
                        <a href="https://github.com/arashesnaashari/quera_todolist">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            class="w-8 h-8 ml-3 text-blue-500"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                            />
                          </svg>
                        </a>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          javaScript
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          html
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          css
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-400">
                    like todos project in react but this time with pure js
                  </div>
                </section>
                <div className="flex flex-row w-full justify-between">
                  <section className="flex flex-col bg-white mb-8 rounded-2xl p-8 w-1/2 mr-3">
                    <div className="flex flex-row items-center gap-2 ">
                      <a href="https://github.com/arashesnaashari/PWA">
                        <div
                          className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                          style={{ backgroundImage: "url(/github.png)" }}
                        ></div>
                      </a>
                      <div className="w-full">
                        <h1 className="text-4xl"></h1>
                        <h1 className="text-4xl flex flex-row items-center justify-between">
                          PWA
                          <a href="https://github.com/arashesnaashari/PWA">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-8 h-8 ml-3 text-blue-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                              />
                            </svg>
                          </a>
                        </h1>
                        <div className="flex flex-row mt-3">
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            javaScript
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            react
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            pwa
                          </h1>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="flex flex-col bg-white mb-8 rounded-2xl p-8 w-1/2">
                    <div className="flex flex-row items-center gap-2 ">
                      <a href="https://github.com/arashesnaashari/apollo">
                        <div
                          className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                          style={{ backgroundImage: "url(/github.png)" }}
                        ></div>
                      </a>
                      <div className="w-full">
                        <h1 className="text-4xl flex flex-row items-center justify-between">
                          GraphQL
                          <a href="https://github.com/arashesnaashari/apollo">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              class="w-8 h-8 ml-3 text-blue-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                              />
                            </svg>
                          </a>
                        </h1>
                        <div className="flex flex-row mt-3">
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            react
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            nextjs
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            graphql
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            apollo
                          </h1>
                          <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                            chart.js
                          </h1>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              {/* <h1 className="text-5xl mb-16 border-black font-bold">
                <span className="border-black border-b-2 shadow-md ">C</span>
                ertificates
              </h1>
              <div className="w-3/4 flex flex-row">
                <section className=" mr-3 flex flex-col bg-white mb-8 rounded-2xl p-8 w-1/2">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://quera.org/media/public/certificate/3af875237af14b1988586481aaa9da12.png">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/fanni.png)" }}
                      ></div>
                    </a>
                    <div>
                      <h1 className="text-md">
                        Web Design Pack <br></br>
                        <span className="text-sm text-gray-400">
                          sep2019 ~ oct2020
                        </span>
                      </h1>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          html
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          css
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          javaScript
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          jQuery
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          BootStrap
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="flex flex-col bg-white mb-8 rounded-2xl p-8 w-1/2">
                  <div className="flex flex-row items-center gap-2 ">
                    <a href="https://quera.org/media/public/certificate/77c8c9378b6345f88448fda57ca19f04.png">
                      <div
                        className="bg-no-repeat bg-cover w-24 h-24 bg-center rounded-xl"
                        style={{ backgroundImage: "url(/fanni.png)" }}
                      ></div>
                    </a>
                    <div>
                      <h1 className="text-md">PHP & MYSQL web development </h1>
                      <span className="text-sm text-gray-400">
                        mar2020 ~ 2022
                      </span>
                      <div className="flex flex-row mt-3">
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          PHP
                        </h1>
                        <h1 className="bg-gray-400 rounded-md text-white mr-2 p-1 text-sm">
                          MYSQL
                        </h1>
                      </div>
                    </div>
                  </div>
                </section>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
