const reverse = (s) => {
    return s.split('').reverse().join('');
}

const main = () => {
    console.log("reverse of 'hello':", reverse("hello"))
    console.log("reverse of 'brother':", reverse("brother"))
    console.log("reverse of 'world':", reverse("world"))
}

main()