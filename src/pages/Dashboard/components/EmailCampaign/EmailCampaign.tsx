import { Select, Textarea } from "@mantine/core";
import { useState } from "react";
import PrimaryButton from "../../../../components/PrimaryButton";
import { showToast } from "../../../../utils/toast";
import axios from "axios";

// const dropdownOptions = ["yarishkumar.1983@gmail.com", "Internal Marketing Team", "Segment 1", "Segment 2", "Segment 3"];
const dropdownOptions = ["yarish.raman@mastek.com", "Internal Marketing Team", "Segment 1", "Segment 2", "Segment 3"];

const EmailCampaign = () => {
  const [recipient, setRecipient] = useState<string | null>(null);
  const [emailContent, setEmailContent] = useState<string>("");
  const [prompt, setPrompt] = useState<string>("");
  const [isEmailCustomized, setIsEmailCustomized] = useState(false);
  const [generatedEmailData, setGeneratedEmailData] = useState("");
  const [subject, setSubject] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const customizeEmail = async () => {
    if (!emailContent || !prompt) {
      showToast("Please complete all fields before submitting.", "error");
      return;
    }
    const payload = {
      emailContent,
      prompt,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://284797de-2ca6-4294-903d-9fd803337a2a.mock.pstmn.io/email-customize",
        payload
      );
      setGeneratedEmailData(response.data.emailContent);
      showToast("Email campaign customized successfully!", "success");
    } catch (error: any) {
      showToast(error.message, "error");
    } finally {
      setIsLoading(false);
    }
    setPrompt("");
    setEmailContent("");
    setIsEmailCustomized(true);
  };

  const sendEmail = async () => {
    if (!recipient || !subject || !generatedEmailData) {
      showToast("Please complete all fields before submitting.", "error");
      return;
    }
    const payload = {
      recipient,
      subject,
      content: generatedEmailData,
    };
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://284797de-2ca6-4294-903d-9fd803337a2a.mock.pstmn.io/send-email",
        payload
      );
      showToast(response.data.message, "success");
    } catch (error: any) {
      showToast(error.message, "error");
    } finally {
      setIsLoading(false);
      setRecipient(null);
      setSubject("");
      setGeneratedEmailData("");
      setIsEmailCustomized(false);
    }
  };

  return (
    <div>
      {isEmailCustomized ? (
        <div className="space-y-4 max-w-[600px] m-5 mx-10">
          <PrimaryButton
            text="Home"
            type="button"
            variant="outline"
            className="!px-2"
            onClick={() => setIsEmailCustomized(false)}
          />
          <Select
            label="Recipient"
            onChange={(value) => setRecipient(value)}
            placeholder="Select Recipient"
            value={recipient}
            data={dropdownOptions}
          />
          <Textarea
            label="Customized email"
            placeholder="Generated email text"
            rows={10}
            value={generatedEmailData}
            onChange={(e) => setGeneratedEmailData(e.target.value)}
          />
          <Textarea
            label="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Enter subject"
            rows={4}
          />
          <PrimaryButton
            text="Send Email"
            className="float-right"
            type="button"
            variant="filled"
            onClick={sendEmail}
            loading={isLoading}
            loaderProps={{ type: "dots" }}
          />
        </div>
      ) : (
        <div className="space-y-4 max-w-[600px] m-10">
          <Textarea
            label="Email content"
            onChange={(e) => setEmailContent(e.currentTarget.value)}
            value={emailContent}
            placeholder="Enter Email content"
            rows={10}
          />
          <Textarea
            label="Prompt"
            onChange={(e) => setPrompt(e.currentTarget.value)}
            value={prompt}
            placeholder="Enter Prompt"
            rows={4}
          />
          <PrimaryButton
            text="Customize Email"
            className="float-right"
            type="submit"
            onClick={customizeEmail}
            variant="filled"
            loading={isLoading}
            loaderProps={{ type: "dots" }}
          />
        </div>
      )}
    </div>
  );
};

export default EmailCampaign;
