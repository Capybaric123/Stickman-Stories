//list of slides to be shown
const content = [
    'New script for announcement page!',
    'Updated contribution guide!',
    ''
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