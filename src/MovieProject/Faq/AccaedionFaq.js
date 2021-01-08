import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export  function AccordionFaq(props) {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <b>What is World Movie?</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        This is the site of the most popular movie. You can choose movies of any genre. You can also search for it!
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <b>How popular movies were selected?</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        The most popular movies were selected by rating and filtered. There are presented through a beautiful slide.
                    </p>
                </AccordionItemPanel>
            </AccordionItem> <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <b>How many genres are separated?</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        There are 10 genres, each of which presents the 20 best films. You can see the whole range by moving left and right. Each card contains the movie name, description, language, and rating of the film. You can also see the movie thriller.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <b>Can I search for a movie?</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Yes, you can. You can see all the movies included in this API: https://api.themoviedb.org on our site.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>

        </Accordion>
    );
}