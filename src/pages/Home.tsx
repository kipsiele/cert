import { useRef, useState } from "react";
import AdminForm from "../components/AdminForm";
import Certificate from "../components/Certificate";
import { generateCertificateId, generateIssuedDate } from "../utils/generator";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Home() {
  const [data, setData] = useState<any>(null);
  const certRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!certRef.current) return;
    const canvas = await html2canvas(certRef.current, { scale: 3 });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("landscape", "pt", [1000, 650]);
    pdf.addImage(imgData, "PNG", 0, 0, 1000, 650);
    pdf.save("certificate.pdf");
  };

  return (
    <div className="pb-20">
      <AdminForm
        onGenerate={(info) =>
          setData({
            ...info,
            certificateId: generateCertificateId(),
            issuedDate: generateIssuedDate(),
          })
        }
      />

      {data && (
        <div className="text-center mt-10">
          <Certificate ref={certRef} {...data} />

          <button
            onClick={handleDownload}
            className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Download PDF
          </button>
        </div>
      )}
    </div>
  );
}
