// fade in header titles on page load //
window.onload = function(){
document.getElementById("big-title").style.color = "white";
document.getElementById("little-title").style.color = "white";
};

// interactive console data table //
var PFPconsole = [
{
    buttonLabel: "introbttn",
    textContent: "The idea at the foundation of this metaphysical world view is everything in creation is the result of the recursive application of a fractal pattern. The elements of that fractal being Consciousness, Force, and Form. All the complexity of the universe is rooted in the repeated expression of this very simple pattern. Fueled by consciousness simple forces and forms interact and combine to form progessively more complex forces and forms. For the purpose of clarification we will need to re-define the terms force, form , and consciousness. For those definitions please click the button labeled First-Triad,but before you do that please watch the wonderful video to the left on fractals",
    videoContent: "https://www.youtube.com/embed/xLgaoorsi9U"
},
{
    buttonLabel: "First-Triad",
    textContent: "some philosophical content",
    videoContent: "https://www.youtube.com/embed/9bm8RrkIHgQ"
}, 
{
    buttonLabel: "Consciousness",
    textContent: "Consciousness is the root of reality, eternal being reflecting on eternal being. It is all that ever was, all that is, and all that shall be.It is beyond our ability to comprehend in any sort of intellectual capacity. However, as spiritual sages have expressed to the ages, it is possible to inwardly know the nature of reality through meditation.In addittion the reflcetive and fractal qualities of consciouness generate neteworks of indvidiaulized units of consciouness with it's associated forces/forms each connected to every other individualized unit of consciousness",
    videoContent:"https://www.youtube.com/embed/bp4NkItgf0E"
}, 
{
    buttonLabel: "Force",
    textContent: "Force is the animating active quality of consciousness,force can be simple or complex,forces can exist as laws e.g.the laws of physics.Again you have to remember we are not using the term in it's everdy day sense although it is inclusive of the everday use of term. ",
    videoContent: "https://www.youtube.com/embed/NYVMlmL0BPQ"
}, 
{
    buttonLabel: "Form",
    textContent: "Form is the static quality of consciousness, form information, structural, procedural,Form tells force how how to behave. Both force and form arte active qualities of consciousness.",
    videoContent: "https://www.youtube.com/embed/p5QXZ0__8VU"
}, 
{
    buttonLabel: "Second-Triad",
    textContent: "The second Triad is Time Space and Energy,it the canvas on  which consciousness expresses itself.  ",
    videoContent: "https://www.youtube.com/embed/jQBhpLwKKEw"
},
{
    buttonLabel: "Time",
    textContent: "Time and space as demonstated are interwoven and insperable. Time is the 4th dimension,our experience of space-time consist of passing slices of physical states in the three dimensional world as the laws of physics play out.",
    videoContent: "https://www.youtube.com/embed/MN4KC_zlW4g"
}, 
{
    buttonLabel: "Space",
    textContent: "Space is a 'thing', space is a field of no-thing-ness, meaning that it is not any one thing untilit is directed by consciousness to become a specific thing. It is a field of infinite potentiality. ",
    videoContent: "https://www.youtube.com/embed/pKO2Dl2dupY"
}, 
{
    buttonLabel: "Energy",
    textContent: "Enegry is the transmission of information from one node of consciousness to another in accordance with directives at the first triad level",
    videoContent: "https://www.youtube.com/embed/pljJO-3KLOs"
}, 
{
    buttonLabel: "Third-Triad",
    textContent: "The Third Triad is the microcosm of mind, body, and spirit. ",
    videoContent: "https://www.youtube.com/embed/dPWaW500cLU"
}, 
{
    buttonLabel: "Mind",
    textContent: "The Mind is the third triad experience as processed by the the brain which qualitatively enhances the spririt which is absorbed into first triad consciousness at death. Wether or not the idividual unit of consciouness maintains it's 'identity' is matter it's level of qualitative development",
    videoContent: "https://www.youtube.com/embed/HbLVTZuTdmQ"
}, 
{
    buttonLabel: "Body",
    textContent: "The body is a reflection of the mind and is governed by spirit, the bodymust be nourished with proper nutrition in order to achieve and maintainoptimal function, the same is true of both mind and spirit",
    videoContent: "https://www.youtube.com/embed/dBaTjv0jBUc"
}, 
{
    buttonLabel: "Spirit",
    textContent: "Spirit is the individual unit of consciousness that is at the center of our being, it is an element of the unltimate consciousness ogf the first triad. This should not be a suprise as it follows logiocally from our previous statement that ALL is essential ONE.",
    videoContent: "https://www.youtube.com/embed/cExfTbmzYbw"
}
];
// Interactive console engine //
for (i = 0;i < 12; i++){
document.getElementById(PFPconsole[i].buttonLabel).onclick = function(){
	//clicked button turns green//
	document.getElementById(PFPconsole[i].buttonLabel).style.backgroundColor = "green";
	//change content in text window when button is clicked//
	document.getElementById("textWidgetContent").innerHTML = PFPconsole[i].textContent;
	//change content in video window when button is clicked//
	document.getElementById("video-content").setAttribute("src",PFPconsole[i].videoContent);
};
};