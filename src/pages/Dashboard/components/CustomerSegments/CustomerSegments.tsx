import { Textarea } from "@mantine/core";
import PrimaryButton from "../../../../components/PrimaryButton.tsx";
import { useState, useCallback } from 'react';

const CustomerSegments = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createCustomerSegment = useCallback(() => {
    setIsLoading(true);
    // Add your logic to create a customer segment here
    setIsLoading(false);
  }, []);

  return (
      <div className="space-y-4 max-w-[600px] m-10">
        <Textarea
            label="Prompt"
            onChange={(e) => setPrompt(e.currentTarget.value)}
            value={prompt}
            placeholder="Enter Prompt"
            rows={4}
        />
        <PrimaryButton
            text="Create a Customer Segment"
            className="float-right"
            type="submit"
            onClick={createCustomerSegment}
            variant="filled"
            loading={isLoading}
            loaderProps={{ type: "dots" }}
        />
      </div>
  );
};

export default CustomerSegments;