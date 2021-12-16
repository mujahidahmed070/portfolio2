const all_projects =
    `Here are some major projects,

[1] Attendance System using Geo-location and Voice Recognition.
[2] Handwritten Text Recognition, Optical Character Recognition.
[3] GatherUp - Online Video Conferencing App.

To get details run : "projects <number> -d"
Example: "projects 1 -d"
`

var prange = [1, 2, 3]

function details(p) {
    switch (p) {
        case 1:
            return (
                `Title : Attendance System using Geo-location and Voice Recognition.
Duration : [Feb 2020 - Aug 2020]
Abstract :-
We created a responsive Web App Attendance system using
voice recognition and Geolocation for NYKS. In that we used
Gaussian mixture model for voice recognition and HTML
geolocation API to get geographical position of user.

GitHub : run 'projects <number> -g'
`);
            break;
        case 2:
            return (
                `Title : Handwritten Text Recognition, Optical Character Recognition.
Duration : [Jan 2021 - Jan 2021]
Abstract :-
Machine learning model for images to text. This project is to
recognize handwritten text from image as a part of
SPECATHON 2021 Which was organized by St. Peters
Engineering College, Hyderabad .

GitHub : run 'projects <number> -g'
`);
            break;
        case 3:
            return (
                `Title : GatherUp
Duration : [Jan 2021 - Present]
Abstract :-
Developing a Video Conferencing app with some facilities like
Social Media.
Using Jitsi Meet API for video conferencing purpose.

GitHub : run 'projects <number> -g'
`);
            break;
            //         case 4:
            //             return (
            //                 `Title : OpenPOS
            // Duration : [Jul 2019 - Aug 2019]
            // Abstract :-
            // A free to use Point of Sale and Inventory Management
            // Application made with flutter.
            // Area : Flutter, Cross-Platform Development.

            // GitHub : run 'projects <number> -g'
            // `);
            // break;
            //         case 5:
            //             return (
            //                 `Title : Kernel SandBox
            // Duration : [Dec 2021 - Dec 2021]
            // Abstract :-
            // A fun sandbox / playgorund to try various kernels
            // on images and see the result. Good for learning
            // how convolution and kernels work.
            // Area : Web development, WebGL, Image Processing.

            // GitHub : run 'projects <number> -g'
            // `);
            //             break;
    }
}

function projects(command) {
    if (command === 'projects') {
        return all_projects;
    } else {
        var coms = command.split(' ');
        if (prange.includes(parseInt(coms[1]))) {
            if (coms[2] === '-d') {
                return details(parseInt(coms[1]));
            } else {
                if (coms[2] === '-g') {
                    return 'github repos not linked yet.'
                } else {
                    return coms[2] + ' is not a valid action for projects, \ntry -d (for deatils), -g (for GitHub Repo)'
                }
            }
        } else {
            return 'project number ' + coms[1] + ' not listed.'
        }
    }
}

export { projects }