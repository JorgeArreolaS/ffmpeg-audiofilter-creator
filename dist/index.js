"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var utils_1 = require("./src/utils");
var ffmpegPath = './src/lib/ffmpeg.exe';
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    var inputs, complex, processFilters, processParams, getInputs, acompressor, flanger, volume, getFilterComplex, ffmpegCommand, t;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                inputs = [
                    /*{
                        id: 0,
                        path: './video.mp4',
                        params: {
                            before: [
                                { key: '--to', value: 5}
                            ],
                            after: [
                                { key: '-t', value: 10 }
                            ]
                        }
                    },{
                        id: 1,
                        path: './video2.mp4',
                        params: {
                            before: [
                                { key: '--to', value: 6}
                            ],
                            after: [
                                { key: '-t', value: 2 }
                            ]
                        }
                    }*/
                    {
                        id: 0,
                        path: 'C:\\Users\\Jorge Arreola\\Music\\Videoder\\RUMINE.mp3',
                        params: {
                            before: [],
                            after: [
                                { key: '-t', value: '1:00' }
                            ]
                        }
                    }
                ];
                complex = {};
                processFilters = function (filter, index, arrayFilters) { return [filter.key, filter.value].join(" "); };
                processParams = function (params) { return params.map(processFilters).join(" ") || ""; };
                getInputs = function (inputs) {
                    var lines = [];
                    inputs.forEach(function (input) {
                        var _a, _b;
                        input.line = [
                            processParams((_a = input.params) === null || _a === void 0 ? void 0 : _a.before),
                            '-i',
                            "'" + input.path + "'",
                            processParams((_b = input.params) === null || _b === void 0 ? void 0 : _b.after),
                        ].join(" ");
                        lines.push(input.line);
                    });
                    return lines.join(" ");
                };
                acompressor = new utils_1.Filter({
                    metadata: {
                        name: 'acompressor',
                        label: 'acompressor'
                    },
                    default_values: [],
                    func: [
                        function (params, filter, resolve) {
                            console.log("ACOMPRESSOR FUNCIONANDO", params);
                            resolve();
                        }
                    ],
                    structure: {
                        inputs: 1,
                        outputs: 1
                    }
                });
                flanger = new utils_1.Filter({
                    metadata: {
                        name: 'flanger',
                        label: 'flanger'
                    },
                    default_values: [],
                    func: [
                        function (params, filter, resolve) {
                            console.log("FLANGER FUNCIONANDO", params);
                            resolve();
                        }
                    ],
                    structure: {
                        inputs: 1,
                        outputs: 1
                    }
                });
                volume = new utils_1.Filter({
                    metadata: {
                        name: 'volume',
                        label: 'volume'
                    },
                    default_values: [],
                    func: [
                        function (params, filter, resolve) {
                            console.log("VOLUME FUNCIONANDO", params);
                            resolve();
                        }
                    ],
                    structure: {
                        inputs: 1,
                        outputs: 1
                    }
                });
                getFilterComplex = function () {
                    /*let af = audioFilter.call(
                        inputs,
                        {
                            'test': 'x',
                            'number': 4,
                            'data1': 17
                        }
                    )*/
                    return [
                        acompressor.call(inputs, {
                            threshold: 0.5,
                            ratio: 20,
                            attack: 0.01,
                            release: 0.01,
                            makeup: 1.25,
                        }),
                        flanger.call([], {
                            delay: 10,
                            regen: 50,
                            width: 100,
                            speed: 2
                        }),
                        volume.call([], {
                            volume: 2
                        }),
                        acompressor.call([], {
                            threshold: 0.5,
                            ratio: 20,
                            attack: 0.01,
                            release: 0.01,
                            makeup: 1.25,
                        }),
                    ].join(',');
                };
                ffmpegCommand = [
                    ffmpegPath,
                    getInputs(inputs),
                    '-filter_complex',
                    '"',
                    getFilterComplex(),
                    '"',
                    '-y',
                    "'C:\\Users\\Jorge Arreola\\Music\\Videoder\\RUMINE_REMASTERED_3.mp3'"
                ];
                console.log(ffmpegCommand);
                console.log(ffmpegCommand.join(" "));
                return [4 /*yield*/, child_process_1.spawnSync("powershell.exe", ffmpegCommand)];
            case 1:
                t = _a.sent();
                console.log(t.stdout.toString());
                console.log(t.output.toString());
                console.log(t.stderr.toString());
                t.output.forEach(function (t) { return console.log; });
                return [2 /*return*/];
        }
    });
}); };
main();
