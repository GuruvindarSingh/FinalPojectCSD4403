// Data for the "HTML Lists" Page

window.onload = function(){
    var html;
    html = '<ol>';
    for (let i of cars) {
        html += '<li>' + i + '</li>';
    }
    html += '</ol>';
    document.getElementById('cars').innerHTML += html;

   
 

html += '</ul>';
document.getElementById('directory').innerHTML += html;
};

var cars = ['Branch', 'Car Model', 'Employee', 'Customer', 'Sales', 'Orders'];

var directory = [
    { type: 'file', name: 'file1.txt' },
    { type: 'file', name: 'file2.txt' },
    {
        type: 'directory',
        name: 'HTML Files',
        files: [
            { type: 'file', name: 'file1.html' },
            { type: 'file', name: 'file2.html' }
        ]
    },
    

    
];
