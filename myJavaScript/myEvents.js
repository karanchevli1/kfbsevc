document.addEventListener("DOMContentLoaded", function() {

    const events = [
        {
            'name': 'Experience Weekend',
            'date': '2025/04/04',
            'place': 'Outside McColl',
            'from_time': '2:00 PM',
            'to_time': '3:30 PM',
            'description': 'Learn more about EVC Club at our booth during the Experience Weekend',
        },
        {
            'name': 'Career Lab',
            'date': '2024/08/26',
            'place': 'McColl 2350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Introductory Career Lab',
        },
        {
            'name': 'Career Lab',
            'date': '2024/09/09',
            'place': 'McColl 2350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Entrepreneurship and Venture Capital Club Career Lab',
        },
        {
            'name': 'Career Lab',
            'date': '2024/09/16',
            'place': 'McColl 2350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Entrepreneurship and Venture Capital Club Career Lab',
        },
        {
            'name': 'Career Lab',
            'date': '2024/09/30',
            'place': 'McColl 2350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Entrepreneurship and Venture Capital Club Career Lab',
        },
        {
            'name': 'Career Lab',
            'date': '2024/10/21',
            'place': 'Koury Auditorium',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Think Like a VC: The Math Behind Venture Success by Joe Darcy',
        },
        {
            'name': 'Career Lab',
            'date': '2024/10/28',
            'place': 'McColl 2350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Entrepreneurship and Venture Capital Club Career Lab',
        },
        {
            'name': 'E-week',
            'date': '2024/11/11',
            'place': 'McColl 2050',
            'from_time': '12:30 PM',
            'to_time': '2:00 PM',
            'description': 'Innovation for Impact in partnership with Net Impact Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/11',
            'place': 'Innovate Carolina Junction',
            'from_time': '5:30 PM',
            'to_time': '7:30 PM',
            'description': 'Navigating Techs Evolution in partnership with Tech Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/12',
            'place': 'Kenan Center 204',
            'from_time': '12:30 PM',
            'to_time': '2:00 PM',
            'description': 'Her Path: Innovating Established Industries in partnership with CWIB',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/12',
            'place': 'Kenan Center 204',
            'from_time': '5:00 PM',
            'to_time': '7:00 PM',
            'description': 'Building the Future in partnership with Real Estate Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/13',
            'place': 'McColl 2000',
            'from_time': '12:30 PM',
            'to_time': '2:00 PM',
            'description': 'Electricity Affordability in the Energy Transition in partnership with Energy Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },

        {
            'name': 'E-week',
            'date': '2024/11/13',
            'place': 'Innovate Carolina Junction',
            'from_time': '5:30 PM',
            'to_time': '7:30 PM',
            'description': 'Transforming Healthcare Through Innovation Workshop in partnership with Healthcare Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/14',
            'place': 'McColl 2350',
            'from_time': '12:30 PM',
            'to_time': '2:00 PM',
            'description': 'Entertainment Evolution in partnership with Sports & Entertainment Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'E-week',
            'date': '2024/11/14',
            'place': 'Kenan Center 204',
            'from_time': '3:30 PM',
            'to_time': '5:00 PM',
            'description': 'Innovation and Technology in Construction in partnership with Prop Tech Club',
            'link': ['Register','https://lu.ma/kfbseweek'],
        },
        {
            'name': 'Career Lab',
            'date': '2024/11/18',
            'place': 'McColl 3350',
            'from_time': '12:45 PM',
            'to_time': '1:45 PM',
            'description': 'Venture Capital Investment Competition Prep Session',
        },
        {
            'name': 'VCIC Internal Competition',
            'date': '2024/11/22',
            'place': 'Kenan-Flagler Business School',
            'from_time': '8:30 AM',
            'to_time': '5:00 PM',
            'description': 'Venture Capital Investment Competition - Internal Round',
            'link': ['More Info','https://vcic.org'],
        },
        {
            'name': 'Career Trek',
            'date': '2024/10/17',
            'from_time': '10:00 AM',
            'to_time': '5:30 PM',
            'description': 'EVC Career Trek to Excelerate Health Venture and The Big Launch Pitch Competition',
        },
        {
            'name': 'Career Trek',
            'date': '2024/10/18',
            'from_time': '10:00 AM',
            'to_time': '6:00 PM',
            'description': 'EVC Career Trek to Bolt Built, and Bull City Venture Partners; followed by happy hour at Valvet Hippo',
        },
        {
            'name': 'UNC EVC x Duke Entrepreneurship Club Mixer',
            'date': '2025/03/19',
            'place': 'The Pitch',
            'from_time': '7:00 PM',
            'to_time': '9:00 PM',
            'description': 'Happy hour with Duke Entrepreneurship Club',
            'link': ['Direction','https://maps.app.goo.gl/wwBpHmHerCamVCRV7'],
        },
        {
            'name': 'Unschakled Ventures',
            'date': '2024/09/10',
            'place': 'Kenan Conference Center',
            'from_time': '12:30 AM',
            'to_time': '2:00 PM',
            'description': 'How to Start a Company on a Visa with Unshackled Ventures (In partnership with International Business Association)',
        },
    ]

    displayEvents(events);

    function custom_sort(a, b) {
        return new Date(b.date) - new Date(a.date);
    }

    function displayEvents(events) {
        const upcomingContainer = document.getElementById("upcoming-events");
        const previousContainer = document.getElementById("previous-events");
        upcomingContainer.innerHTML = "";
        previousContainer.innerHTML = "";
        var upcoming = []

        const today = new Date().setHours(0, 0, 0, 0).toLocaleString('en-US', {timeZone: 'America/New_York'});

        events.sort(custom_sort);

        events.forEach(event => {
            const eventDate = new Date(event.date).setHours(0, 0, 0, 0).toLocaleString('en-US', {timeZone: 'America/New_York'});
            const eventCard = createEventCard(event);
            if (eventDate >= today) {
                upcoming.push(eventCard);
            } else {
                previousContainer.appendChild(eventCard);
            }
        });
        upcoming.reverse();
        upcoming.forEach(event => {
            upcomingContainer.appendChild(event);
        });
    }

    function createEventCard(event) {
        const card = document.createElement("div");
        card.className = "event-card";
        card.innerHTML = `
            <div class="event-date">
                <i class="calendar alternate outline icon"></i>
                ${formatDate(event.date)}
            </div>
            <div class="event-details">
                <div class="event-title">${event.name}</div>
                <div class="event-meta"><i class="clock outline icon"></i> ${event.from_time} ${event.to_time? ` -  ${event.to_time}`:''}</div>
                ${event.place ? `<div class="event-meta"><i class="map marker outline icon"></i> ${event.place}</div>` : ''}
                <div class="event-description">${event.description}</div>
                ${event.link ? `<div class="event-actions">
                    <a href="${event.link[1]}" target="_blank" class="ui button"><i class="external alternate icon"></i>${event.link[0]}</a>
                </div>` : ''}
            </div>
        `;
        return card;
    }

    function formatDate(dateString) {
        const options = { year: "numeric", month: "short", day: "numeric",timeZone: 'America/New_York' };
        return new Date(dateString).toLocaleDateString("en-US", options)
    }

    loadCSV();
});
