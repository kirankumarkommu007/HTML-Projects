document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("dob").addEventListener("change", function () {
        var dob = new Date(this.value);
        var today = new Date();

        var ageYears = today.getFullYear() - dob.getFullYear();
        var ageMonths = today.getMonth() - dob.getMonth();
        var ageDays = today.getDate() - dob.getDate();

        if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
            ageYears--;
            ageMonths += 12;
        }

        if (ageDays < 0) {
            ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        }
       
         var years = ageYears + " years";
         var months = ageMonths + " months";
         var days = ageDays + " days";

        document.getElementById("years").value = years;
        document.getElementById("months").value = months;
        document.getElementById("days").value = days;
    });
});