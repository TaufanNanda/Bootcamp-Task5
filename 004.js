const prompt = require('prompt');

prompt.start();

console.log("Masukkan tahun awal!");
prompt.get(['start'], function (err, result) {
    if (err) { return onErr(err); }
    
    start_year = result.start;

    console.log("Masukkan tahun akhir!");
	prompt.get(['end'], function (err, result) {
	    if (err) { return onErr(err); }
	    
	    end_year = result.end;

	    function leap_year_range(start_year, end_year) {
			var year_range = [];
			for (var i = start_year; i <= end_year; i++)
			{
				year_range.push(i);
			}
			var new_array = [];

			year_range.forEach(
				function(year)
				{ 
					if (test_LeapYear(year)) 
						new_array.push(year);
				});

			return new_array;
		}

		function test_LeapYear(year) {
			if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
				return console.log(year+" adalah tahun kabisat");
			} else {
				return console.log(year+" adalah bukan tahun kabisat");;
			}
		}

		leap_year_range(start_year,end_year);
	});
});

function onErr(err) {
    console.log(err);
    return 1;
}