$(document).ready(function() {

    $("body")
        .on("click", "#generate_multiplication_btn", function() {
            /* Value to be multiplied */
            let multiplier = $("#generate_multiplication").val();

            /* This will clear table before generating new table */
            $("#multiplication_table").text("");

            /* First index value to be multiplied */
            for(let index1 = 1; index1 <= multiplier; index1++) {
                let tr = $("<tr></tr>");

                /* Second index value to be multiplied and append in td */
                for(let index2 = 1; index2 <= multiplier; index2++) {
                    tr.append($("<td>" + index1 * index2 + "</td>"));
                } 
                /* Append multiplied index */
                $("#multiplication_table").append(tr);
            }
        })
});