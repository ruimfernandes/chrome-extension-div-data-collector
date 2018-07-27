const aggregatedValuehtmlString = 'Aggregated value: ';
const currentValuehtmlString = 'Current value: ';
var changedElements = [];
var innerHtml = [];
var aggregatedValue = 0;
var currentValue = 0;
var selectCount = 0;

function setSelectCount(value) {
  var intValue = parseInt(value);
  selectCount = intValue === 'Nan' ? 0 : intValue;
  deselectElements();
  iterateElements();
}

function selectElements(value) {
  deselectElements();
  changedElements = document.getElementsByClassName(value);
  iterateElements();
}

function iterateElements() {
  var selectedFields = 0;
  console.log('vai!');

  for (let ele of changedElements) {
    ele.previousBackgroundColor = ele.style.backgroundColor || 'white';
    ele.style.backgroundColor = 'red';
    innerHtml.push(ele.innerText);
    selectedFields++;
    if (selectCount > 0 && selectedFields >= selectCount) {
      break;
    }
  }

  console.log('content ', document.body);

  setCurrentValue();
}

function deselectElements() {
  for (let ele of changedElements) {
    ele.style.backgroundColor = ele.previousBackgroundColor;
    innerHtml = [];
  }
  setCurrentValue();
}

function setCurrentValue() {
  currentValue = innerHtml.length > 0 ? innerHtml.reduce(reducer) : 0;
  setHtmlResultText('current-value', currentValuehtmlString, currentValue);
}

function reducer(accumulator, currentValue) {
  return parseInt(accumulator) + parseInt(currentValue);
}

function storeAggregatedValue() {
  aggregatedValue += parseInt(currentValue);
  setHtmlResultText(
    'aggregated-value',
    aggregatedValuehtmlString,
    aggregatedValue
  );
}

function clearAggregatedValue() {
  aggregatedValue = 0;
  setHtmlResultText(
    'aggregated-value',
    aggregatedValuehtmlString,
    aggregatedValue
  );
}

function setHtmlResultText(className, string, value) {
  document.getElementsByClassName(className)[0].innerHTML = `${string}${value}`;
}
