const tabs = document.querySelectorAll('.restaurants__tab');
let hash = location.hash.substring(1);
let tabActive = '';

// Запрос базы данных 

const getData = async() => {
    const data = await fetch('db.json');

    if(data.ok) {
        return data.json();
    } else {
        throw new Error(`Данные небыли получены, ошибка ${data.status} ${data.statusText}`)
    }
}

const getBrands = (callback, prop, value) => {
    getData()
        .then(data => {
            if(value) {
                callback(data.filter(item => item[prop] === value))
            } else {
                callback(data);
            }
            if(value === "brands") {
                callback(data);
            }
        })
        .catch(err => {
            console.error(err);
        })
}


// Генерация слайдера на главной странице
try {
    if(!document.querySelector('.restaurants-swiper')) {
        throw 'This is not a slider'
    }
    const slider = document.querySelector('.swiper-wrapper-restaurants');

    const createSlide = ({name, thumb, id}) => {
        const div = document.createElement('a');
        div.href = './restaurant.html#' + id;
        div.classList.add('restaurants-swiper__slide');
        div.classList.add('swiper-slide');

        div.innerHTML = `
        <div class="restaurants-swiper__slide-head">
            <img class="restaurants-swiper__slide-img" src="${thumb}" alt="slide">
        </div>
        <div class="restaurants-swiper__slide-title">
            <h3>${name}</h3>
        </div>
        <div class="restaurants-swiper__slide-info">
            <div class="restaurants-swiper__slide-info__left">
                <ul>
                    <li>Доставка</li>
                </ul>
            </div>
            <div class="restaurants-swiper__slide-info__right">
                <span>Кухни</span>
                <ul>
                    <li>мясо</li>
                </ul>
            </div>
        </div>
        `
        return div;
    }

    const renderSliderList = data => {
        slider.textContent = '';
        
        data.forEach(item => {
            const slide = createSlide(item);
            slider.append(slide);
        }) 
    }
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabActive = tab.textContent
            getBrands(renderSliderList, "category", tabActive);
        })
    })
    getBrands(renderSliderList, "category", tabActive);
} catch(err) {
    console.warn(err);
}
// Генерация страницы ресторана
try {
    if(!document.querySelector('.restaurant-page')) {
        throw 'This is a not vacansies-page';
    }

    const restaurantTitle = document.querySelector('.restaurant__title');
    const restaurantDesc = document.querySelector('.restaurant__desc');
    const slider = document.querySelector('.swiper-wrapper');


    // const createSlide = ({folder}) => {
    //     const div = document.createElement('div');
    //     div.classList.add('swiper-slide');


    //     div.innerHTML = `
    //     <img src="./img/restaurants-slide.jpg" alt="">
    //     `
    //     return div;
    // }

    // const renderSliderList = data => {
    //     slider.textContent = '';
        
    //     data.forEach(item => {
    //         const slide = createSlide(item);
    //         slider.append(slide);
    //     }) 
    // }


    const renderRestaurantPage = ([{ name, description }]) => {
        restaurantTitle.textContent = name;
        restaurantDesc.textContent = description;

        if(description) {
            restaurantDesc.textContent = description;
        } else {
            restaurantDesc.style.display = 'none';
        }
        // renderSliderList();
    }
    window.addEventListener('hashchange', () => {
        hash = location.hash.substring(1);
        getBrands(renderRestaurantPage, "id", hash);
        window.scrollTo(0, 0);
    })
    getBrands(renderRestaurantPage, 'id', hash);
} catch(err) {
    console.warn(err);
}