import React from "react";
import PageHeading from "../Utilities/PageHeading/PageHeading";

export default function CovidPage() {
  document.title =  "How we're responding to COVID-19"
  return (
    <div>
      <PageHeading heading="How we're responding to COVID-19" />

      <div className="conatiner" style={{padding: '30px'}}>
        <h2>What’s a Rich Text element?</h2>
        <p>
          The rich text element allows you to create and format headings,
          paragraphs, blockquotes, images, and video all in one place instead of
          having to add and format them individually. Just double-click and
          easily create content.
        </p>
        <h4>Static and dynamic content editing</h4>
        <p>
          A rich text element can be used with static or dynamic content. For
          static content, just drop it into any page and begin editing. For
          dynamic content, add a rich text field to any collection and then
          connect a rich text element to that field in the settings panel.
          Voila!
        </p>
        <h4>How to customize formatting for each rich text</h4>
        <p>
          Headings, paragraphs, blockquotes, figures, images, and figure
          captions can all be styled after a class is added to the rich text
          element using the "When inside of" nested selector system.
        </p>
      </div>
    </div>
  );
}
