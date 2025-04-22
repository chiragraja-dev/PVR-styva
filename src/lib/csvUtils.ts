  // src/utils/csvUtils.ts
  import { ApiResponse } from '@/types/DownloadMovie';
  import { Parser } from '@json2csv/plainjs';

  export const convertToCSV = (data: ApiResponse): string => {
    // Convert object to array of key-value pairs with proper formatting
    const rows = Object.entries(data).map(([key, value]) => ({
      Key: formatKey(key),
      Value: formatValue(value)
    }));

    // Create CSV parser with explicit configuration
    const parser = new Parser({
      fields: ['Key', 'Value'],
      header: true,
      delimiter: ',',
      defaultValue: 'N/A'
    });

    return parser.parse(rows);
  };

  // Format column keys for better readability
  const formatKey = (key: string): string => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/_/g, ' ')
      .trim()
      .replace(/^./, (match) => match.toUpperCase());
  };

  // Format values for consistent CSV output
  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined) return 'N/A';
    
    if (typeof value === 'number') {
      // Handle currency values and numeric formatting
      if (value === 0) return '0';
      return value % 1 === 0 
        ? value.toLocaleString('en-IN') 
        : value.toLocaleString('en-IN', { maximumFractionDigits: 2 });
    }
    
    if (typeof value === 'string') {
      // Clean and format string values
      const cleaned = value
        .trim()
        .replace(/\s+/g, ' ') // Collapse multiple spaces
        .replace(/[“”]/g, '"') // Normalize quotes
        .replace(/[‘’]/g, "'");
        
      // Preserve numeric-looking strings
      return /^\s*[\d,.]+\s*$/.test(cleaned) 
        ? cleaned.replace(/,/g, '').trim() 
        : cleaned;
    }
    
    return String(value);
  };