const GetARandomActorName = ()=> {

    const NAMES = [
        "Jhonatan Teodoro",
        "Guido Van Rossum",
        "Bjarne Stroustrup",
        "Cliff Bleszinski",
        "James Schmalz",
        "Eric Evans",
        "Shay Banon",
        "Jun Jay",
        "Kreps Rao",
        "Neha James",
        "Schmalz Narkhede",
        "Eric Rao",
        "Shay Banon",
        "Jun Evans",
        "Neha Kreps",
        "Neha Jay",
    ]

    const position = Math.floor(Math.random() * NAMES.length);
    return NAMES[position];

}

export default GetARandomActorName