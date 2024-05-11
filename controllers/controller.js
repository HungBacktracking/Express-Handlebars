let controller = {};
const {emotions, categories, products, zodiacs} = require('../models/data');

controller.task1 = (req, res) => {
    res.locals.emotions = emotions;
    res.render('task1', {title: 'Inspiring Quotes'})
}

controller.task2 = ((req, res) => {
    let salary = isNaN(req.query.salary) ? 0 : req.query.salary;
    let s55 = salary * 0.55;
    let s10 = salary * 0.1;
    let s5 = salary * 0.05;
    res.render('task2', {title: 'Jars Saving', s55, s10, s5})
});

controller.postTask2 = ((req, res) => {
    let salary = isNaN(req.body.salary) ? 0 : req.body.salary;
    let s55 = salary * 0.55;
    let s10 = salary * 0.1;
    let s5 = salary * 0.05;
   
    res.render('task2', {title: 'Jars Saving', s55, s10, s5})
});

controller.task3 = ((req, res) => {
    let category = req.query.category ?? 0;
    res.locals.products = products;
    res.locals.categories = categories;
    if (category != 0) {
        res.locals.products = products.filter(p => p.category == category);
    }
    
    res.render('task3', {title: 'TV Sales'})
});

controller.task4List = ((req, res) => {
    res.render('task4' ,{title: 'Zodiac Characteristics', zodiacs})
});

controller.task4Details = ((req, res) => {
    let name = req.params.name;
    let zodiac = zodiacs.find(z => z.name == name);
    if (zodiac == undefined) {
            zodiac = zodiacs[0];
    }
    console.log(zodiac);
    res.render('task4-details', {title: 'Zodiac Characteristics', zodiac})
});


module.exports = controller;