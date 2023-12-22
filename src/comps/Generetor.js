import './generator.css';
import { useState } from "react";

let arr = [
    "Deep in the heart of the Amazon rainforest, a symphony of life unfolds. Towering trees, draped in lush vines, create a dense canopy that filters sunlight into a mosaic of shadows below. Exotic birds with vibrant plumage dart between branches, their calls echoing through the emerald expanse. Jaguars, elusive and majestic, move silently through the underbrush, their golden eyes keenly observing the dance of life. The air is thick with humidity, carrying the scent of earth and vegetation. This ancient forest, a crucible of biodiversity, is a testament to the delicate balance of nature and the wonders it conceals.",
  
    "In the sprawling metropolis, towering skyscrapers pierce the sky like giants of steel and glass. The cityscape is a kaleidoscope of lights, a testament to the ceaseless activity that defines urban life. People from all walks of life move in orchestrated chaos, each with a unique story written on the canvas of the city streets. Street vendors peddle their goods amidst the hustle, and the distant honking of traffic becomes a rhythmic backdrop to the urban symphony. This city is a pulsating organism, alive with dreams, ambitions, and the relentless pursuit of progress.",
  
    "At the edge of the Arctic Circle, a vast and desolate tundra stretches as far as the eye can see. The frozen landscape is adorned with ice sculptures, carved by the relentless winds that sweep across the barren expanse. Polar bears, masters of this icy realm, traverse the frozen sea in search of seals. The eerie silence is occasionally broken by the crackling of ice or the distant howl of a lone wolf. In this harsh and unforgiving environment, survival is a testament to the resilience of life and the adaptations it undergoes to endure the extreme cold.",
  
    "High in the Himalayan mountains, a sacred monastery perches on a precipice, overlooking valleys shrouded in mist. Monks, draped in vibrant robes, chant ancient mantras, their voices carrying through the thin mountain air. Prayer flags flutter in the breeze, their colors representing the elements. Snow-capped peaks stand as sentinels to this spiritual sanctuary, and the echo of a distant bell resonates in the crisp mountain air. Here, time seems to stand still, and the pursuit of enlightenment is intertwined with the breathtaking beauty of the natural world.",
  
    "On the sun-kissed shores of a tropical paradise, palm trees sway in rhythm with the gentle ocean breeze. The sand, as fine as powdered sugar, caresses bare feet as waves lazily kiss the shoreline. Snorkelers explore vibrant coral reefs teeming with life, while the distant melody of steel drums floats through the air. This idyllic island is a haven of tranquility, a sanctuary where time slows down, and the worries of the world fade away with each incoming tide.",
  
    "Amidst the sprawling vineyards of Tuscany, rows of grapevines stretch towards the horizon like soldiers standing at attention. The air is imbued with the earthy aroma of ripe grapes, and the sun-drenched hills are a patchwork of green and gold. Farmers tend to the vines with meticulous care, understanding the alchemy that transforms fruit into nectar. Villages with terra cotta roofs dot the landscape, and the timeless art of winemaking weaves a narrative that spans generations. Here, the marriage of tradition and terroir produces wines that tell a story of the land and the hands that cultivate it.",
  
    "In the heart of the Sahara Desert, dunes of golden sand stretch endlessly, sculpted by the ever-shifting winds. The sun, an unrelenting ball of fire, casts long shadows across the arid landscape. Camels, resilient creatures adapted to this harsh environment, traverse the vast expanse in a caravan led by seasoned guides. The silence is palpable, broken only by the soft crunch of footsteps on the sand. This barren and austere desert, seemingly devoid of life, is a testament to the beauty found in simplicity and the endurance of life in the face of adversity.",
  
    "Beneath the crystal-clear waters of the Great Barrier Reef, a vibrant kaleidoscope of coral formations provides a home to a mesmerizing array of marine life. Schools of technicolor fish dance in rhythmic unison, and graceful sea turtles navigate the underwater gardens. The reef, a living masterpiece sculpted by time and nature, is a testament to the delicate balance of ecosystems. The gentle ebb and flow of the ocean currents carry with them the secrets of this underwater realm, a sanctuary of biodiversity that captivates and humbles those fortunate enough to explore its depths.",
  
    "On the historic streets of Kyoto, the soft rustle of a geisha's silk kimono echoes through the narrow alleyways. Temples, with their intricately carved wooden facades, stand as silent witnesses to centuries of tradition. Cherry blossoms, in delicate hues of pink, carpet the ground in a fleeting celebration of spring. Tea ceremonies unfold with deliberate precision, a choreography that embodies the essence of Japanese culture. This city, where modernity and tradition coexist in harmony, is a living testament to the enduring beauty of the Land of the Rising Sun.",
  
    "In the heart of the Australian Outback, the red earth stretches to the horizon, dotted with ancient rock formations that whisper stories of the Dreamtime. Kangaroos bound across the landscape, and the haunting cry of the didgeridoo carries through the vastness. The night sky, untouched by city lights, becomes a tapestry of stars that seems to go on forever. This harsh and rugged land, where time seems to move at its own pace, is a canvas upon which the stories of indigenous cultures are painted with the brushstrokes of tradition and connection to the land."
]

function Generator() {

    //todo >> declair state Varriable
    let [number, setNumber] = useState();
    let [article, setArticle] = useState([]);

    //todo >> generate article on click 
    function generateArticle(){
        if(number == ""){
            alert("Provide me a number to get your article.");
            return;
        }
        else if(number >= 10){
            alert("Uri baba! you are demanding to much article. 😵")
            return;
        }
        setArticle(arr.slice(0, number));
    }


    return(
        <main>       
            <section className='generateContainer'>
                <h2>How many article do you want?</h2>
                <div className="subContainer">
                    <span>Give me a esteemation: </span>
                    <input 
                        type="number"
                        min = {1}
                        max = {10}
                        onChange = {(e) => setNumber(e.target.value)}
                    />
                    <button onClick = {generateArticle}>Generate</button>
                </div>
            </section>
            <section className="articleStorage"
                style = {{display: number == "" ? 'none' : 'flex'}}
            >
                {
                    article.map((item) =>{
                        return(
                            <div className="articleCard">
                                <p>{item}</p>
                            </div>
                        );
                    })
                }
            </section>

        </main>
    );
}

export default Generator;