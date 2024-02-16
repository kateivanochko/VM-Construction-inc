const area = document.getElementById("area")
const form = document.getElementById("form")
const result = document.getElementById("result")

area.addEventListener("focus", () => {
    area.setSelectionRange(0, area.value.length)
});


form.addEventListener("submit", (e) => {

    e.preventDefault()
    area.blur()

    let areas = ['algonquin', '60102', '60118',
        'arlington heights', '60004', '60006', '60008', '60095',
        'bannockburn', '60015',
        'barrington', '60010', '60011', '62765',
        'barrington hills', '60110', '60179',
        'bartlett', '60103', '60177',
        'bloomingdale', '60108', '60117', '60157',
        'buffalo grove','60089',
        'cary', '60013',
        'crystal lake', '60012', '60014', '60039', '60156',
        'deer park',
        'deerfield', 
        'des plaines', '60017', '60018', '60019',
        'elk grove village', '60007', '60009',
        'fox river grove', '60021',
        'gages lake',
        'glencoe', '60022', '60093',
        'glenview', '60062', '60029', '60082',
        'grayslake', '60030',
        'gurnee', '60031', '60048',
        'hainesville', '60073',
        'hanover park', '60133', '60172', '60193',
        'hawthorn woods',
        'highland park', '60040',
        'highwood',
        'hoffman estates', '60107', '60120', '60169', '60192', '60194',
        'holiday hills', '60051',
        'indian creek',
        'ingleside',
        'island lake', '60042',
        'iverness', '60067',
        'kenilworth', '60043',
        'kildeer', '60074',
        'lake barrington', '60084',
        'lake bluff', '60044', 
        'lake forest', '60035', '60045',
        'lake in the hills', 
        'lake villa', '60046',
        'lake zurich', '60047',
        'lakemoor', '60041',
        'libertyville', '60061', '60085',
        'lincolnshire', '60069',
        'lindenhurst',
        'long grove',
        'long lake',
        'mchenry', '60050',
        'mettawa',
        'morton grove', '60053',
        'mt prospect', 'mount prospect', '60005', '60056',
        'mundelein', '60060',
        'niles', '60646', '60714',
        'north barrington',
        'northbrook', '60026', '60065',
        'northfield', '60025', '60091',
        'oakwood hills', 
        'palatine', '60038', '60055', '60078', '60094',
        'park ridge', '60016',
        'port barrington', '60068',
        'prairie grove', 
        'prospect heights', '60070', '60090',
        'riverwoods',
        'rolling meadows',
        'roselle',
        'rosemont',
        'round lake',
        'round lake beach',
        'round lake park',
        'schaumburg', '60159', '60168', '60173',
        'south barrington',
        'streamwood',
        'tower lakes',
        'trout valley', 
        'venetian village',
        'vernon hills', 
        'village of lakewood', 
        'volo', '60020',
        'wauconda',
        'wheeling',
        'wildwood', 
        'wilmette', 
        'winnetka',
        'woodstock', '60098']

    const input = area.value.toLowerCase().trim()

    if(areas.includes(input)){
        result.innerHTML = `<p><i class="fa-solid fa-circle-check"></i>We've got you covered! </br> Contact us now to get your free estimate.</p>`
        console.log("Yes")
    } else if(input.length == 0){
        result.innerHTML = `<p><i class="fa-solid fa-circle-info"></i>Enter your city or zipcode in the field above. </p> `
    }else{
        result.innerHTML =`<p><i class="fa-solid fa-circle-xmark"></i>Unfortunatly we do not serve the area entered above. Please make sure the spelling is correct or check back later for future updates </p>`
        console.log("No")
    }

});

