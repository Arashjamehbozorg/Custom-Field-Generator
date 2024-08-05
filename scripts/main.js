$(document).ready(function () {
  let fieldCount = 0;

  function updateTable() {
    const formData = {}; // To store field values indexed by header names

    $(".dynamic-fields .form-group").each(function () {
      const headerName = $(this).find(".header-name").val(); // Get header name from input
      const fieldValue = $(this).find(".field-value").val(); // Get field value

      if (headerName && fieldValue) {
        if (!formData[headerName]) {
          formData[headerName] = []; // Initialize array if it doesn't exist
        }
        formData[headerName].push(fieldValue); // Push the value to the array
      }
    });

    const tableHeaders = $(".table-headers");
    const tableBody = $(".table-body");

    tableHeaders.empty();
    tableBody.empty();

    // Get unique headers (keys) from formData
    const headers = Object.keys(formData);

    // Create table headers
    headers.forEach((header) => {
      tableHeaders.append(`<th>${header}</th>`);
    });

    // Create rows for the values
    const maxRows = Math.max(
      ...headers.map((header) => formData[header].length)
    );
    for (let i = 0; i < maxRows; i++) {
      const valueRow = $("<tr></tr>");
      headers.forEach((header) => {
        valueRow.append(`<td>${formData[header][i] || ""}</td>`); // Append the value from formData
      });
      tableBody.append(valueRow);
    }
  }

  function validateFields() {
    let allFieldsValid = true;
    $(".dynamic-fields .form-group").each(function () {
      const headerName = $(this).find(".header-name").val(); // Get header name from input
      const fieldValue = $(this).find(".field-value").val(); // Get field value

      if (!headerName || !fieldValue) {
        alert("Header name and field value cannot be empty.");
        allFieldsValid = false;
        return false; // Break out of the each loop
      }
    });
    return allFieldsValid;
  }

  $(".add-text").click(function (event) {
    event.preventDefault();
    if (!validateFields()) return; // Check existing fields before adding a new one

    fieldCount++;
    $(".dynamic-fields").append(`
        <div id="field${fieldCount}" class="form-group">
            <label>Text Field ${fieldCount}</label>
            <input type="text" class="header-name" placeholder="Header Name for Text Field ${fieldCount}" />
            <input type="text" class="field-value" name="textfield${fieldCount}" placeholder="Enter value" />
            <button type="button" class="remove-button" data-id="field${fieldCount}">Remove</button>
        </div>
      `);
    updateTable();
  });

  $(".add-select").click(function (event) {
    event.preventDefault();
    if (!validateFields()) return; // Check existing fields before adding a new one

    fieldCount++;
    $(".dynamic-fields").append(`
        <div id="field${fieldCount}" class="form-group">
            <label>Select Field ${fieldCount}</label>
            <input type="text" class="header-name" placeholder="Header Name for Select Field ${fieldCount}" />
            <select class="field-value" name="selectfield${fieldCount}">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
            <button type="button" class="remove-button" data-id="field${fieldCount}">Remove</button>
        </div>
      `);
    updateTable();
  });

  $(document).on("click", ".remove-button", function () {
    const fieldId = $(this).data("id");
    $(`#${fieldId}`).remove();
    updateTable();
  });

  $(".save-button").click(function (event) {
    event.preventDefault();
    if (!validateFields()) return; // Check existing fields before saving

    const formData = {}; // To store field values indexed by header names

    $(".dynamic-fields .form-group").each(function () {
      const headerName = $(this).find(".header-name").val(); // Get header name from input
      const fieldValue = $(this).find(".field-value").val(); // Get field value

      if (headerName && fieldValue) {
        if (!formData[headerName]) {
          formData[headerName] = []; // Initialize array if it doesn't exist
        }
        formData[headerName].push(fieldValue); // Push the value to the array
      }
    });

    const tableHeaders = $(".table-headers");
    const tableBody = $(".table-body");

    tableHeaders.empty();
    tableBody.empty();

    // Get unique headers (keys) from formData
    const headers = Object.keys(formData);

    // Create table headers
    headers.forEach((header) => {
      tableHeaders.append(`<th>${header}</th>`);
    });

    // Create rows for the values
    const maxRows = Math.max(
      ...headers.map((header) => formData[header].length)
    );
    for (let i = 0; i < maxRows; i++) {
      const valueRow = $("<tr></tr>");
      headers.forEach((header) => {
        valueRow.append(`<td>${formData[header][i] || ""}</td>`); // Append the value from formData
      });
      tableBody.append(valueRow);
    }
  });
});
