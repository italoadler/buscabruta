// Title: bb.js 
// Author: IA
// lib 

(() => {
    // dom 
    const $ = (selector) => document.querySelector(selector);
    const $$ = (selector) => document.querySelectorAll(selector);
    const on = (element, event, callback) => element.addEventListener(event, callback);
    const addClass = (element, className) => element.classList.add(className);
    const removeClass = (element, className) => element.classList.remove(className);
    const hasClass = (element, className) => element.classList.contains(className);
    const getValue = (element) => element.value;
    const setValue = (element, value) => element.value = value;
    const getAttribute = (element, attribute) => element.getAttribute(attribute);
    const setAttribute = (element, attribute, value) => element.setAttribute(attribute, value);
    const removeAttribute = (element, attribute) => element.removeAttribute(attribute);
    const setHTML = (element, html) => element.innerHTML = html;
    const getHTML = (element) => element.innerHTML;
    const append = (element, html) => element.insertAdjacentHTML('beforeend', html);
    const prepend = (element, html) => element.insertAdjacentHTML('afterbegin', html);
    const remove = (element) => element.remove();
    const createElement = (element) => document.createElement(element);
    const appendChild = (element, child) => element.appendChild(child);
    const removeChild = (element, child) => element.removeChild(child);
    const select = (element) => document.querySelector(element);
    const selectAll = (element) => document.querySelectorAll(element);
    const selectById = (element) => document.getElementById(element);
    const selectByClass = (element) => document.getElementsByClassName(element);
    const selectByTag = (element) => document.getElementsByTagName(element);
    const selectByQuery = (element) => document.querySelector(element);
    const selectAllByQuery = (element) => document.querySelectorAll(element);
})();


// Path: bb.js/bb.js