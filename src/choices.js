import React from "react";

export default [
  {
    id: "what-is",
    desc: "What is Wildfire Swap? 🔥",
    content: (
      <ul>
        <li>
          <a href="https://wildfire.fun" target="_blank">
            Landing Page
          </a>
        </li>
      </ul>
    ),
    color: "#dcffcc",
    read: false
  },
  {
    id: "social",
    desc: "Social Media Marketing (Twitter mostly)",
    content: (
      <ul>
        <li>Regularity, Consistency, {"&"} Scheduling</li>
        <li>Signal boosts</li>
        <li>Engaging mutuals {"&"} influencers</li>
        <li>Plugging project to influencers when requested</li>
        <li>Strategic self retweeting</li>
        <li>Reshare old content</li>
        <li>Curate profile</li>
        <li>Pin an actionable tweet</li>
        <li>Repeat content works less</li>
        <li>GIFs are great</li>
      </ul>
    ),
    color: "#9fdfcd",
    read: false
  },
  {
    id: "funnels",
    desc: "Funnel Thoughts & Plans",
    content: (
      <ul>
        <li>Awareness: Twitter Outreach, Local Events, Conferences</li>
        <li>Interest: Twitter Updates, Website, Blog</li>
        <li>Engagement: Mailing List, Discord</li>
        <li>Conversion: Mailing List, Discord, Steam</li>
        <li>Retention: Mailing List, Discord, Map Editor, Content Udpates</li>
      </ul>
    ),
    color: "#baabda",
    read: false
  },
  {
    id: "newsletter",
    desc: "Monthly Newsletter  📧",
    content: (
      <ul>
        <li>Subject line ideas and fine tuning - emojis, grab interest?</li>
        <li>
          Decreased performance over time.
          <ul>
            <li>Seasonal?</li>
            <li>Conference emails lower quality?</li>
            <li>Not new/good enough content?</li>
          </ul>
        </li>
        <li>Include personal content for "personal brand"</li>
        <li>Helps with engagement?</li>
        <li>Remains to be seen on conversion in the end!</li>
      </ul>
    ),
    color: "#d79abc",
    read: false
  },
  {
    id: "state-driven",
    desc: "State Driven Architecture",
    content: (
      <ul>
        <li>Great for prototyping</li>
        <li>Easy to reason about state transformations</li>
        <li>Harder to animate state transitions</li>
      </ul>
    ),
    color: "#dcffcc",
    read: false
  },
  {
    id: "blog-posts",
    desc: "Blog Post Marketing Attempts",
    content: (
      <ul>
        <li>
          <a
            href="https://ryankubik.com/blog/showcases-season-retrospective/"
            target="_blank"
          >
            Showcase Season Retrospective: Wildfire Swap at SIX {"&"} XOXO 2019
          </a>
        </li>
        <li>
          <a
            href="https://ryankubik.com/blog/wildfire-swap-inspiration/"
            target="_blank"
          >
            Wildfire Swap: A puzzle game inspired by fires in the Pacific
            Northwest
          </a>
        </li>
        <li>
          <a
            href="https://ryankubik.com/blog/indie-puzzles-pax-west-2019/"
            target="_blank"
          >
            All the Indie Puzzle Games at PAX West 2019
          </a>
        </li>
      </ul>
    ),
    color: "#9fdfcd",
    read: false
  },
  {
    id: "polish",
    desc: "Polish 💎",
    content: (
      <ul>
        <li>A little bit of tweening goes a long way</li>
        <li>
          <a href="https://www.youtube.com/watch?v=AJdEqssNZ-U" target="_blank">
            The Art of Screenshake
          </a>
        </li>
        <li>Nothing should just appear or dissapear</li>
        <li>Layers of detail help</li>
        <li>Helps feel more professional</li>
      </ul>
    ),
    color: "#baabda",
    read: false
  },
  {
    id: "design-pillars",
    desc: "Game Design Pillars 🏛",
    content: (
      <ul>
        <li>Core driving pillars that we make all decisions against</li>
        <li>
          Discovery is a core pillar for Wildfire Swap
          <ul>
            <li>
              We care more about people experiencing cool things than being
              challenged
            </li>
            <li>so we cut harder levels that impeded player progression</li>
            <li>cut more levels that weren't novel or interesting</li>
          </ul>
        </li>
        <li>
          <a
            href="https://www.notion.so/Audio-Inspiration-6c932ffbc8da49159ebfbb08c0d28b73"
            target="_blank"
          >
            I wrote about Wildfire Swap Design Principles for my audio folks
          </a>
        </li>
      </ul>
    ),
    color: "#d79abc",
    read: false
  },
  {
    id: "content-pains",
    desc: "Content Creation Pains",
    content: (
      <ul>
        <li>I find it much easier to produce systems than content</li>
        <li>Content is part of the "second 90%" of game dev</li>
        <li>I'm getting help this time around</li>
        <li>Look for systems that create more content?</li>
      </ul>
    ),
    color: "#dcffcc",
    read: false
  },
  {
    id: "content-pacing",
    desc: "Content Pacing 🏃‍♂️",
    content: (
      <ul>
        <li>Difficulty curves</li>
        <li>Focus on emotional journey of player</li>
        <li>Set standard conventions and patterns, then break them</li>
        <li>
          Different tiers of progressions
          <ul>
            <li>Entire game arc</li>
            <li>Main story line arc</li>
            <li>Each world's arc</li>
            <li>Each sequence's arc</li>
            <li>Each level's arc (?)</li>
          </ul>
        </li>
      </ul>
    ),
    color: "#9fdfcd",
    read: false
  },
  {
    id: "diegetic-ui",
    desc: "Diegetic UI Preference",
    content: (
      <ul>
        <li>
          When possible, prefer{" "}
          <a
            href="https://www.gamasutra.com/view/feature/4286/game_ui_discoveries_what_players_.php?print=1"
            target="_blank"
          >
            Diegetic UI
          </a>{" "}
          and{" "}
          <a href="http://www.richtaur.com/post/integrated-ui/" target="_blank">
            Integrated UI
          </a>
        </li>
        <li>Anything that can be shown in game, should be</li>
        <li>
          Avoid unecessary explanations
          <ul>
            <li>prefer to solve problems with design</li>
            <li>Run level is an example</li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=PsC0zIhWNww"
                target="_blank"
              >
                Super Mario Bros World 1-1
              </a>
            </li>
          </ul>
        </li>
      </ul>
    ),
    color: "#baabda",
    read: false
  },
  {
    id: "puzzle-designs",
    desc: "Puzzle Design Thoughts 💭",
    content: (
      <ul>
        <li>
          <a
            href="http://www.richtaur.com/post/lock-before-key/"
            target="_blank"
          >
            Lock before key
          </a>
        </li>
        <li>
          <a
            href="https://www.rockpapershotgun.com/2015/01/22/how-to-make-a-puzzle-game/"
            target="_blank"
          >
            Great puzzle design article
          </a>
          <ul>
            <li> A good puzzle wants to be solved</li>
            <li>
              Learning, rather than solving, is the measure of exhilaration
            </li>
            <li>Making a puzzle is much like solving a puzzle</li>
            <li>A good puzzle is elegant and often minimal</li>
            <li>Ambition elevates all</li>
          </ul>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=OGSeLSmOALU" target="_blank">
            Exploring the space of a puzzle game
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/watch?v=4RlpMhBKNr0" target="_blank">
            Story driven level design in Celeste
          </a>
        </li>
      </ul>
    ),
    color: "#d79abc"
  },
  {
    id: "social-media-driven",
    desc: "Social Media Driven Development",
    content: (
      <ul>
        <li>Polish early and often</li>
        <li>Optimize game for sharing during dev process</li>
        <li>Don't linger with dev art</li>
        <li>Record GIFs constantly</li>
        <li>Save GIFs in a drive folder</li>
        <li>Polish motivates you AND shares well</li>
        <li>Prevents you from putting off "unimportant" polish work</li>
        <li>Helps you optimize for sharing</li>
      </ul>
    ),
    color: "#dcffcc"
  }
];
