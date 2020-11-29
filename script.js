const quotes = [ 
	{ quote: 'The elevator to success is out of order. You’ll have to use the stairs, one step at a time.',
	author: 'Joe Girard'}, 
	{ quote: 'People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.',
	author: 'Zig Ziglar'}, 
	{ quote: 'I always wanted to be somebody, but now I realise I should have been more specific.',
	author: 'Lily Tomlin'}, 
	{ quote: 'I am so clever that sometimes I don’t understand a single word of what I am saying.',
	author: 'Oscar Wilde'}, 
	{ quote: 'People say nothing is impossible, but I do nothing every day.',
	author: 'Winnie the Pooh'}, 
	{ quote: 'Life is like a sewer... what you get out of it depends on what you put into it.',
	author: 'Tom Lehrer'}, 
	{ quote: 'You can’t have everything. Where would you put it?',
	author: 'Steven Wright'}, 
	{ quote: 'Work until your bank account looks like a phone number.',
	author: 'Unknown'}, 
	{ quote: 'Change is not a four letter word… but often your reaction to it is!',
	author: 'Jeffrey Gitomer'}, 
	{ quote: 'If you think you are too small to make a difference, try sleeping with a mosquito.',
	author: 'Dalai Lama'}, 
	{ quote: 'Bad decisions make good stories.',
	author: 'Ellis Vidler'}, 
	{ quote: 'I’ll probably never fully become what I wanted to be when I grew up, but that’s probably because I wanted to be a ninja princess.',
	author: 'Cassandra Duffy'}, 
	{ quote: 'When life gives you lemons, squirt someone in the eye.',
	author: 'Cathy Guisewite'}, 
	{ quote: 'A clear conscience is a sure sign of a bad memory.',
	author: 'Mark Twain'}, 
	{ quote: 'Well-behaved women seldom make history.',
	author: 'Laurel Thatcher Ulrich'}, 
	{ quote: 'I didn’t fail the test. I just found 100 ways to do it wrong.',
	author: 'Benjamin Franklin'}, 
	{ quote: 'I used to think I was indecisive, but now I’m not so sure.',
	author: 'Unknown'}, 
	{ quote: 'Don’t worry about the world coming to an end today. It’s already tomorrow in Australia.',
	author: 'Charles Schulz'}, 
	{ quote: 'Think like a proton. Always positive.',
	author: 'Unknown'}, 
	{ quote: 'Be happy – it drives people crazy.',
	author: 'Unknown'}, 
	{ quote: 'Optimist: someone who figures that taking a step backward after taking a step forward is not a disaster, it’s more like a cha-cha.',
	author: 'Robert Brault'}, 
	{ quote: 'The question isn’t who is going to let me, it’s who is going to stop me.',
	author: 'Ayn Rand'}, 
	{ quote: 'You’re only given a little spark of madness. You mustn’t lose it.',
	author: 'Robin Williams'}, 
	{ quote: 'I am an early bird and a night owl… so I am wise and I have worms',
	author: 'Michael Scott'}, 
	{ quote: 'If you let your head get too big, it’ll break your neck.',
	author: 'Elvis Presley'}, 
	{ quote: 'The road to success is dotted with many tempting parking spaces.',
	author: 'Will Rogers'}, 
	{ quote: 'Leadership is the art of getting someone else to do something you want done because he wants to do it.',
	author: 'Dwight D. Eisenhower'}, 
	{ quote: 'Live each day like it’s your second to the last. That way you can fall asleep at night.',
	author: 'Jason Love'}, 
	{ quote: 'Even a stopped clock is right twice every day. After some years, it can boast of a long series of successes.',
	author: 'Marie Von Ebner-Eschenbach'}, 
	{ quote: 'Honest criticism is hard to take, particularly from a relative, a friend, an acquaintance, or a stranger.',
	author: 'Franklin P. Jones'}, 
	{ quote: 'I believe that if life gives you lemons, you should make lemonade… And try to find somebody whose life has given them vodka, and have a party.',
	author: 'Ron White'}, 
	{ quote: 'Opportunity is missed by most people because it is dressed in overalls and looks like work.',
	author: 'Thomas Eddison'}, 
	{ quote: 'A diamond is merely a lump of coal that did well under pressure.',
	author: 'Unknown'}, 
	{ quote: 'Nothing is impossible, the word itself says “I’m possible!',
	author: 'Audrey Hepburn'}, 
	{ quote: 'Friendship is like peeing on yourself: everyone can see it, but only you get the warm feeling that it brings.',
	author: 'Robert Bloch'}, 
	{ quote: 'Women who seek to be equal with men lack ambition.',
	author: 'Marilyn Monroe'}, 
	{ quote: 'By working faithfully eight hours a day you may eventually get to be boss and work twelve hours a day.',
	author: 'Robert Frost'}, 
	{ quote: 'The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.',
	author: 'Terry Pratchett'}, 
	{ quote: 'Age is of no importance unless you’re a cheese.',
	author: 'Billie Burke'}, 
	{ quote: 'When tempted to fight fire with fire, remember that the Fire Department usually uses water.',
	author: 'Unknown'}
];

var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
];


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            colorIndex: 0,
            color: colors,
            quote: quotes
        }

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        this.setState({
            index: Math.floor(Math.random() * Math.floor(quotes.length-1)),
            colorIndex: Math.floor(Math.random() * Math.floor(colors.length-1)),
            color: this.state.color,
            quote: this.state.quote
        })
    }

    render() {
        return (
            <div className="container" style={{backgroundColor: this.state.color[this.state.colorIndex]}}>
                <div className="box">
                    <p className="quote" style={{color: this.state.color[this.state.colorIndex]}}>{this.state.quote[this.state.index].quote}</p>
                    <p className="author" style={{color: this.state.color[this.state.colorIndex]}}>- {this.state.quote[this.state.index].author}</p>
                    <button className="button" onClick={this.handleChange} style={{backgroundColor: this.state.color[this.state.colorIndex]}}>New quote</button>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));