var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiZ3JvdmR1Y2siLCJhIjoiYXVYb29zbyJ9.TO2NcqGJDyWDCSvOfBBUIQ',
    showMarkers: true,
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
                center: [85.946066, 27.956005],
                zoom: 12.52,
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
            alignment: 'fully',
            hidden: false,
            title: '',
            image: './images/slides/Slide5.PNG',
            description: '',
            location: {
                center: [85.946066, 27.956005],
                zoom: 4,
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
                zoom: 8.5,
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
                zoom: 12.52,
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
                center: [84.212689, 28.223980],
                zoom: 6.0,
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
                center: [85.946066, 27.956005],
                zoom: 8.5,
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
                center: [-58.54195, -34.71600],
                zoom: 4,
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
            image: './images/slides/Slide14.PNG',
            description: '',
            location: {
                center: [84.212689, 28.223980],
                zoom: 6.0,
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
                center: [6.15116, 46.20595],
                zoom: 12.52,
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
                center: [-58.54195, -34.71600],
                zoom: 4,
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
                center: [6.15116, 46.20595],
                zoom: 12.52,
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
