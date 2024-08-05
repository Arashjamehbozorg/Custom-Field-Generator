# Custom-Field-Generator

## Project Description

The Custom Fields Generator is a web-based application that allows users to dynamically add or remove form fields of two types: text and select. Users can fill in these fields and save the data, which will be displayed in a table format on the same page. The application ensures that all input fields are filled before allowing any new fields to be added or the data to be saved.

## Features

1. **Dynamic Form Fields**: Users can add or remove text and select fields at will.
2. **Data Validation**: Ensures that all header names and values are filled before adding new fields or saving the data.
3. **Table Display**: Displays the form data in a table format with appropriate headers and values.
4. **Instant Updates**: The table updates dynamically as fields are added or removed, providing instant feedback to the user.

## Technologies Used

- **HTML**: Structure of the web page.
- **CSS**: Basic styling (optional, can be enhanced).
- **JavaScript**: Core functionality using jQuery for DOM manipulation and event handling.

## Getting Started

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge).
- Internet connection to load jQuery from CDN.

### Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd custom-field-generator
   ```
3. Open the `index.html` file in your preferred web browser.

## Usage

1. **Adding Fields**: 
   - Click on "Add Text Field" to add a new text input field.
   - Click on "Add Select Field" to add a new select dropdown field.
2. **Removing Fields**: Click the "Remove" button next to any field to remove it.
3. **Filling Data**: Enter the header name and the value for each field.
4. **Saving Data**: Click the "Save" button to save the data. The data will be displayed in the table below the form.
5. **Validation**: Ensure all fields have both a header name and a value before adding new fields or saving the data. An alert will notify if any field is left empty.

## Code Overview

### HTML

- Contains the structure of the form and table.
- Includes placeholders for dynamically added fields.

### CSS

- Basic styles for layout and design.
- Can be customized to enhance the look and feel.

### JavaScript (jQuery)

- Handles the dynamic addition and removal of fields.
- Validates input fields to ensure no empty headers or values are added.
- Updates the table dynamically to reflect the current state of the form.

## Contact

For any questions or suggestions, feel free to open an issue or contact me at jamehbozorgarash@gmail.com
