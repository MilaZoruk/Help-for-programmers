
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuRoom.module.css';

const MenuRoom = () => (

  <div className={styles.flexBox}>

  <Link to="/chicagoartmuseum" className={styles.btn}>
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">

      <img className="rounded-t-lg" src="" alt=""/>

      <div className="p-5">
      
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Посетить Чикагский институт искусств</h5>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Чикагский институт искусств, основанный в 1879 году, является одним из крупнейших музеев мира,
        в котором хранится необыкновенная коллекция предметов из разных стран, культур и времени.</p>
        
        <button type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Перейти
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      
      </div>
    </div>
  </Link>

  <Link to="/clevelendartmuseum" className={styles.btn}>
  <div className="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      
      <img className="rounded-t-lg" src="" alt="" />
  
      <div className="p-5">
       
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Посетить Кливлендский художественный музей</h5>

        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Кливлендский художественный музей основан в 1913 году и расположен в северо-восточном Огайо. Музей является одним из самых выдающихся художественных комплексов в мире.</p><br></br>
        <button type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Перейти
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
  </Link>

    <Link to="/harvardartmuseum" className={styles.btn}>
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      
      <img className="rounded-t-lg" src="" alt="" />
      
      <div className="p-5">
       
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Посетить Гарвардский художественный музей</h5>

        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Гарвардский художественный музей включает в себя: Музей Фогга, Музей Буша-Райзингера и Музей Артура М.Саклера.
        В коллекции около 250000 художественных объектов: от античности до наших дней.</p>
        <button type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Перейти
          <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
    </Link>
    
    <a href="https://www.google.com/maps/@51.50872,-0.1292224,0a,82.2y,339.39h,88.97t/data=!3m4!1e1!3m2!1sHEUBDomqEpCI0Zqt9Djm3g!2e0?source=apiv3" target="_blank" rel="noreferrer" className={styles.btn}>
    <div className="max-w-sm rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      
        <img className="rounded-t-lg" src="" alt="" />
   
        <div className="p-5">
        
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Посетить Лондонскую национальную галерею</h5>
       
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">Художественный музей в Лондоне на Трафальгарской площади, содержащий более 2000 образцов западноевропейской живописи XIII— XX вв. Картины в галерее экспонируются в хронологическом порядке.</p>
          <button type="button" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Перейти
            <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
      </div>
    </div>
    </a>
 </div>
);

export default MenuRoom;
