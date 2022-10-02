/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/cargoez.js":
/*!*********************************!*\
  !*** ./resources/js/cargoez.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cargoez =
/*#__PURE__*/
function () {
  function Cargoez() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, Cargoez);

    if (!key) {
      console.error("invalid api key");
      return;
    }

    this.initialise();
    this.createStyles(); // this.generateResult();

    this.publicKey = key;
    console.log('initialized...');
  }

  _createClass(Cargoez, [{
    key: "initialise",
    value: function initialise() {
      this.widget = document.getElementById("cez-tracker");
      this.widget.classList.add('cez-container');
      this.createTrackingContainerContent();
    }
  }, {
    key: "createStyles",
    value: function createStyles() {
      var styleTag = document.createElement('style');
      styleTag.innerHTML = "\n        .cez-container {\n            display: block;\n            width: 100%;\n            height: auto;\n        }\n        \n        .cez-container .content {\n            margin: 20px 0px ;\n            border: 1px solid #dbdbdb;\n            padding: 10px;\n            display: flex;\n            background-color: #fff;\n            // flex-direction: column;\n        }\n        .cez-container form * {\n            margin: 5px 0;\n        }\n        .cez-container form input {\n            padding: 10px;\n            min-width: 300px;\n        }\n        .cez-container form button {\n            cursor: pointer;\n            background-color: #04b73f;\n            color: #fff;\n            border: 0;\n            border-radius: 2px;\n            padding: 10px 20px;\n            margin-left: 15px;\n        }\n        .cez-container form button:hover {\n            background-color: #16632f;\n            \n        }\n        .cez-table tbody tr td  {\n            font-family: Arial;\n            font-size: 14px;\n            padding: 5px;\n            width: 20px;\n            vertical-align: top;\n        }\n        .cez-table tbody tr td h2{\n            font-family: Arial;\n            font-size: 16px;\n        }\n        .cez-table tbody tr td h2 {\n            margin-top: 5px;\n            font-weight: bold;\n        }\n        .cez-status-table{\n            \n            border-collapse: collapse;\n            margin-bottom: 30px;\n        }\n        .cez-status-table tbody tr td, .cez-status-table thead tr th {\n            font-family: Arial;\n            padding: 5px;\n           \n            vertical-align: top;\n            text-align: left;\n        }\n        .cez-status-table thead tr th {\n            font-size: 12px;\n            line-height: 16px;\n        }\n        .cez-status-table tbody tr td {\n            font-size: 14px;\n            line-height: 18px;\n        }\n        .bold{\n            font-weight: bold;\n        }\n        ".replace(/^\s+|\n/gm, '');
      document.head.appendChild(styleTag);
    }
  }, {
    key: "createTrackingContainerContent",
    value: function createTrackingContainerContent() {
      var form = document.createElement('form');
      form.classList.add('content');
      var txtTrackingNumber = document.createElement('input');
      txtTrackingNumber.required = true;
      txtTrackingNumber.id = 'tracking-number';
      txtTrackingNumber.type = 'text'; // txtTrackingNumber.value = 'ASST223520';

      txtTrackingNumber.placeholder = 'Track by Shipment number';
      this.submitBtn = document.createElement('button');
      this.submitBtn.textContent = 'SEARCH';
      this.submitBtn.id = 'submit-button';
      form.appendChild(txtTrackingNumber);
      form.appendChild(this.submitBtn);
      form.addEventListener('submit', this.submit.bind(this));
      this.widget.appendChild(form);
    }
  }, {
    key: "submit",
    value: function submit(event) {
      var _this = this;

      event.preventDefault();
      document.getElementById("submit-button").disabled = true;
      this.submitBtn.textContent = "Please wait...";

      if (this.resultWrapper) {
        this.widget.removeChild(this.resultWrapper);
      }

      var formData = {
        searchText: event.srcElement.querySelector('#tracking-number').value.trim()
      };
      fetch("https://api.cargoez.com/shipmentserver/api/v1/track" + "?referenceNo=" + formData.searchText + "&&companyId=" + this.publicKey, {
        method: "GET",
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer' // body: JSON.stringify(formData)

      }).then(function (response) {
        return response.json();
      }).then(function (_ref) {
        var data = _ref.data;

        _this.generateResult(data);

        document.getElementById("submit-button").disabled = false;
        _this.submitBtn.textContent = "SEARCH";
      })["catch"](function (error) {
        console.error('Error:', error);
        document.getElementById("submit-button").disabled = false;
        _this.submitBtn.textContent = "SEARCH";
      });
    }
  }, {
    key: "generateResult",
    value: function generateResult(data) {
      this.resultWrapper = document.createElement('dev');
      this.resultWrapper.id = "result-warpper";
      this.resultWrapper.classList.add('cez-result-wrapper');
      var tbl = document.createElement('table');
      tbl.classList.add('cez-table');
      tbl.style.width = '100%';
      var tbdy = document.createElement('tbody');
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.appendChild(this.newLabel('Place of Receipt'));

      if (data.pickup && data.pickup.address) {
        td.appendChild(this.newValue(data.pickup.address.city ? data.pickup.address.city + ", " : " " + data.pickup.address.country));
        td.appendChild(this.newValue("ETD: ".concat(data.pickup.pickupDate ? new Date(data.pickup.pickupDate).toLocaleDateString() : "")));
      }

      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(this.newLabel('Origin Port'));

      if (data.booking && data.booking && data.booking.originPort) {
        td.appendChild(this.newValue("".concat(data.booking.originPort.name, ", ").concat(data.booking.originPort.country)));
        td.appendChild(this.newValue("ETD: ".concat(data.etd ? new Date(data.etd).toLocaleDateString() : "")));
      }

      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(this.newLabel('Destination Port'));

      if (data.booking && data.booking && data.booking.destinationPort) {
        td.appendChild(this.newValue("".concat(data.booking.destinationPort.name, ", ").concat(data.booking.destinationPort.country)));
        td.appendChild(this.newValue("ETA: ".concat(data.eta ? new Date(data.eta).toLocaleDateString() : "")));
      }

      tr.appendChild(td);
      var td = document.createElement('td');
      td.appendChild(this.newLabel('Final Delivery'));

      if (data.delivery && data.delivery.address) {
        td.appendChild(this.newValue(data.delivery.address.city ? data.delivery.address.city + ', ' : " " + data.delivery.address.country));
        td.appendChild(this.newValue("ETD: ".concat(data.delivery.deliveryDate ? new Date(data.delivery.deliveryDate).toLocaleDateString() : "")));
      }

      tr.appendChild(td);
      tbdy.appendChild(tr);
      var tr = document.createElement('tr');
      var td = document.createElement('td');
      td.appendChild(this.newLabel('Transport Mode'));
      td.appendChild(this.newValue(data.modeOfTransport));
      tr.appendChild(td);

      if (data.modeOfTransport !== 'Air') {
        var td = document.createElement('td');
        td.appendChild(this.newLabel('Shipment details'));
        td.appendChild(this.newValue(data.shipmentType));
        tr.appendChild(td);
      }

      var td = document.createElement('td');
      tr.appendChild(td);
      var td = document.createElement('td');
      tr.appendChild(td);
      tbdy.appendChild(tr);
      tbl.appendChild(tbdy);
      this.resultWrapper.appendChild(tbl);
      if (data.milestones) this.generateStatus(data.milestones);
      this.widget.appendChild(this.resultWrapper);
    }
  }, {
    key: "generateStatus",
    value: function generateStatus(milestones) {
      var tbl = document.createElement('table');
      tbl.classList.add('cez-status-table');
      tbl.style.width = '100%';
      tbl.setAttribute('border', '1');
      var thead = document.createElement('thead');
      var tr = document.createElement('tr');
      var th = document.createElement('th');
      th.innerHTML = "DATE";
      th.style.backgroundColor = "#EFF6FF";
      tr.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "STATUS";
      th.style.backgroundColor = "#EFF6FF";
      tr.appendChild(th);
      var th = document.createElement('th');
      th.innerHTML = "FROM";
      th.style.backgroundColor = "#EFF6FF";
      tr.appendChild(th);
      thead.appendChild(tr);
      tbl.appendChild(thead);
      var tbdy = document.createElement('tbody');
      milestones.forEach(function (row) {
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = new Date(row.timestamp).toLocaleDateString();
        tr.appendChild(td);
        var td = document.createElement('td');
        var title = document.createElement('div');
        title.innerHTML = row.title;
        title.classList.add('bold');
        td.appendChild(title);
        var desc = document.createElement('div');
        desc.innerHTML = row.description;
        td.appendChild(desc);
        tr.appendChild(td);
        var td = document.createElement('td');
        td.innerHTML = row.messageFrom;
        tr.appendChild(td);
        tbdy.appendChild(tr);
      });
      tbl.appendChild(tbdy);
      this.resultWrapper.appendChild(tbl);
    }
  }, {
    key: "newLabel",
    value: function newLabel(name) {
      var label = document.createElement('label');
      label.innerHTML = name;
      return label;
    }
  }, {
    key: "newValue",
    value: function newValue(name) {
      var value = document.createElement('h2');
      value.innerHTML = name;
      return value;
    }
  }]);

  return Cargoez;
}();

var app = new Cargoez('5bd008758adc0c324825699c');

/***/ }),

/***/ 1:
/*!***************************************!*\
  !*** multi ./resources/js/cargoez.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\laravel\site.cargoez.com\resources\js\cargoez.js */"./resources/js/cargoez.js");


/***/ })

/******/ });