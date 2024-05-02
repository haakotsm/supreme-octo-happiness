import { WeatherData } from '@mocks/data';
import {
    calculateRealFeelTemperature,
    celsiusToFahrenheit,
    convertPrecipitationToWeatherString,
    convertTemperatureToColor,
    fahrenheitToCelsius,
    formatDate, isValidDate, parseDate, parseWeatherData
} from '../src/utils';

describe('Utility Functions', () => {

    describe('convertPrecipitationToWeatherString', () => {
        it('should return the correct weather string for precipitation values', () => {
            expect(convertPrecipitationToWeatherString(0)).toBe('Sol');
            expect(convertPrecipitationToWeatherString(0.1)).toBe('Sol');
            expect(convertPrecipitationToWeatherString(0.5)).toBe('Sol');
            expect(convertPrecipitationToWeatherString(1)).toBe('Sol');
            expect(convertPrecipitationToWeatherString(10)).toBe('Overskyet');
            expect(convertPrecipitationToWeatherString(30)).toBe('Regn');
            expect(convertPrecipitationToWeatherString(40)).toBe('Regn');
            expect(convertPrecipitationToWeatherString(50)).toBe('Storm');

        });
    });

    describe('convertTemperatureToColor', () => {
        it('should return the correct color for temperature values', () => {
            expect(convertTemperatureToColor(0)).toBe('blue');
            expect(convertTemperatureToColor(10)).toBe('green');
            expect(convertTemperatureToColor(19)).toBe('green');
            expect(convertTemperatureToColor(20)).toBe('yellow');
            expect(convertTemperatureToColor(29)).toBe('yellow');
            expect(convertTemperatureToColor(30)).toBe('orange');
            expect(convertTemperatureToColor(39)).toBe('orange');
            expect(convertTemperatureToColor(40)).toBe('red');
            expect(convertTemperatureToColor(100)).toBe('red');
        });

        it('should handle negative temperature values', () => {
            expect(convertTemperatureToColor(-10)).toBe('blue');
            expect(convertTemperatureToColor(-20)).toBe('blue');
        });
    });

    describe('calculateRealFeelTemperature', () => {
        it('should calculate real feel temperature correctly', () => {
            expect(calculateRealFeelTemperature(20, 5)).toBe(23.046477466640003);
            expect(calculateRealFeelTemperature(20, -5)).toBe(23.828577466640002);
        });
    });

    describe('celsiusToFahrenheit', () => {
        it('should convert Celsius to Fahrenheit correctly', () => {
            expect(celsiusToFahrenheit(0)).toBe(32);
            expect(celsiusToFahrenheit(-20)).toBe(-4);
            expect(celsiusToFahrenheit(100)).toBe(212);
        });
    });

    describe('fahrenheitToCelsius', () => {
        it('should convert Fahrenheit to Celsius correctly', () => {
            expect(fahrenheitToCelsius(32)).toBe(0);
            expect(fahrenheitToCelsius(0)).toBe(-17.77777777777778);
            expect(fahrenheitToCelsius(212)).toBe(100);
        });
    });

    describe('formatDate', () => {
        it('should format date correctly', () => {
            expect(formatDate(new Date(2022, 2, 1))).toBe('01.03.2022 00:00');
        });
    });

    describe('isValidDate', () => {
        it('should validate date correctly', () => {
            expect(isValidDate(parseDate('2022-03-01 00:00'))).toBe(true);
            expect(isValidDate(parseDate('2022-03-31'))).toBe(false);
            expect(isValidDate(parseDate('2022-03-31T00:00Z', "iso"))).toBe(true);
            expect(isValidDate(parseDate('31.03.2022', "dd.MM.yyyy"))).toBe(true);
            expect(isValidDate(parseDate('31.03.2022', "dd.MM.yyyy HH:mm"))).toBe(false);
        });
    });

    describe('parseDate', () => {
        it('should parse date correctly', () => {
            const expectedDate = new Date("2022-03-01Z+01:00");
            const parsed = parseDate('2022-03-01 00:00')
            expect(parsed).toBeInstanceOf(Date);
            expect(parsed).toEqual(expectedDate);
        });
    });

    describe('parseWeatherData', () => {
        it('should parse weather data correctly', () => {
            const weatherDataJSON: Record<string, WeatherData> = {
                '2022-03-01': {
                    date: '2022-03-01',
                    location: 'Oslo',
                    temperature: 20,
                    precipitation: 0,
                    windSpeed: 5,
                    cloudCover: 0,
                },
            }
            expect(parseWeatherData(weatherDataJSON)).toEqual([{
                date: '2022-03-01',
                location: 'Oslo',
                temperature: 20,
                precipitation: 0,
                windSpeed: 5,
                cloudCover: 0,
            }]);
        });
    });


});