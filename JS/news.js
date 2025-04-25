//list of slides to be shown
const content = [
    'first slide',
    'second slide',
];

let key = 0;
const marquee = $('.marquee');
marquee.on('animationstart', () => {
    key = 0;
    marquee.text(content[key]);
});
marquee.on('animationiteration', () => {
    key++;
    if(typeof content[key] === 'undefined') key = 0;
    marquee.text(content[key]);
});
marquee.removeClass('paused');