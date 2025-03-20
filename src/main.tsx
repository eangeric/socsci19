import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./Pages/Home.tsx";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Summary from "./Pages/Summary.tsx";
import Page from "./Components/Page.tsx";
import PromptOne from "./Components/PromptOne.tsx";
import PromptTwo from "./Components/PromptTwo.tsx";
import PromptThree from "./Components/PromptThree.tsx";
import Mine from "./Components/Mine.tsx";
import Conclusion from "./Pages/Conclusion.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/conclusion" element={<Conclusion />} />
        <Route path="/page">
          <Route
            path="1"
            element={
              <Page
                prompt='Create a hero page using react and tailwind css about the short story "A Logic Named Joe"'
                children={<PromptOne />}
                observations="Obviously we weren't gonna get something glamorous. The prompt we gave it was very lackluster. It did go a little off script by trying to include an image as the background that I did not have access to. In the end it did do its job and do exactly as I told it which was just to make a page about the story."
                next="/page/2"
              />
            }
          />
          <Route
            path="2"
            element={
              <Page
                prompt='Create a hero page using react and tailwind css about the short story "A Logic Named Joe." I want it to be almost like a movie poster and for it to attract people to want to read the story.'
                children={<PromptTwo />}
                observations="Wow look at the animations! This is a step up from the last page visually but for some reason I was expecting more with this prompt. One thing this response missed out on that was in the previous prompt was it did not include the author's name. Also, the response did go off script by using a library that I did not mention in the prompt called framer-motion to add in the animations. I had to manually install it for the code to work. However, it still did what I told it but I think the prompt is still too vague to get what I am envisioning."
                next="/page/3"
              />
            }
          />
          <Route
            path="3"
            element={
              <Page
                prompt='Create a hero page using react and tailwind css and framer motion only about the short story "A Logic Named Joe." I want it to be almost like a movie poster and for it to attract people to want to read the story. What I am envisioning is in the hero page I want to include a logic, which is like a retro television with antennas at the top and buttons on the side. Have this at the top of the page. Then I want in the middle the title "A Logic Named Joe" and the name of the author. Below all that I want a short summary of the book that is enticing for people to read it. Then at the very bottom of the page include "coming soon" and a button that says learn more. Also behind the logic add a glow effect to really pop out the logic. For the background include a futuristic looking background.'
                children={<PromptThree />}
                observations="This more detailed prompt really helped a lot in creating a visually appealing web page. It did everything I asked it to with some minor nitpicks. The antennas aren't really antennas. The summary at the bottom isn't really that accurate as I don't think every home had a logic."
                next="/page/4"
              />
            }
          />
          <Route
            path="4"
            element={
              <Page
                prompt="Multiple Prompts, using ChatGPT."
                children={<Mine />}
                observations="It took me many prompts to get to the final product. I did no coding myself and only asked ChatGPT to add/remove/change things. Sometimes it would make mistakes as the code wouldn't work as intended and sometimes I would have to explain more in details to get what I really wanted."
                next="/conclusion"
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
