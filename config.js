var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiZ3JvdmR1Y2siLCJhIjoiYXVYb29zbyJ9.TO2NcqGJDyWDCSvOfBBUIQ',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'Welcome to Nepal',
    subtitle: 'A geographic journey around Nepal',
    byline: 'Maeve Gregory',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slide-1',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide1.PNG',
            description: '',
            location: {
                center: [80, 20],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide-2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide2.PNG',
            description: '',
            location: {
                center: [80, 20],
                zoom: 2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide-3',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide3.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide4.PNG',
            description: '',
            location: {
                center: [85.963959, 27.972871],
                soom: 10,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-5',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide5.PNG',
            description: '',
            location: {
                center: [85.963959, 27.972871],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-6',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide6.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 6.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide-7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide7.PNG',
            description: '',
            location: {
                center: [85.435110, 27.673236],
                soom: 10,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-8',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide8.PNG',
            description: '',
            location: {
                center: [85.435110, 27.673236],
                zoom: 21,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-9',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './images/slides/Slide9.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 6.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-10',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide10.PNG',
            description: '',
            location: {
                center: [85.305799, 27.703873],
                soom: 10,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide-11',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide11.PNG',
            description: '',
            location: {
                center: [85.305799, 27.703873],
                zoom: 21,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-12',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide12.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-13',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './images/slides/Slide13.PNG',
            description: '',
            location: {
                center: [86.731258, 27.687385],
                soom: 10,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-14',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide19.png',
            description: '',
            location: {
                center: [86.924932, 27.985549],
                zoom: 12,
                pitch: 90,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slide-15',
            alignment: 'left',
            hidden: false,
            title: '',
            image: './images/slides/Slide15.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-16',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide16.PNG',
            description: '',
            location: {
                center: [83.275762, 27.469268],
                soom: 10,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-17',
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './images/slides/Slide17.PNG',
            description: '',
            location: {
                center: [83.275240, 27.468926],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'slide-18',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './images/slides/Slide18.PNG',
            description: '',
            location: {
                center: [83.985604, 28.239670],
                zoom: 2.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
