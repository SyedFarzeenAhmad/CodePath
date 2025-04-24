//Self (Except transforBuffer)
// Create buffer from text
function createBuffer(text) {
    // Implement buffer creation
    const buf = Buffer.from(text, 'utf8');
    return buf;
  }
  
  // Concatenate multiple buffers
  function concatenateBuffers(buffers) {
    // Implement buffer concatenation
    const buf = Buffer.concat(buffers);
    return buf;
  }
  
  // Transform buffer content
  function transformBuffer(buffer) {
    // Implement buffer transformation
    const buf = Buffer.from(buffer.toString().toUpperCase());
    return buf;
  }
  
  // Convert to base64
  function convertToBase64(buffer) {
    // Implement base64 conversion
    const buf = buffer.toString('base64');
    return buf;
  }
  
  // Slice buffer
  function sliceBuffer(buffer, start, end) {
    // Implement buffer slicing
    const buf = buffer.subarray(start, end);
    return buf;
  }

  console.log(convertToBase64(sliceBuffer(createBuffer('Hello World!'), 0, 6)));
