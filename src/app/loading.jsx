import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Loading() {
  return (
    <Container>
      <Section>
        <div className="flex flex-col w-fit  bkpgrid:grid   bkpgrid:grid-rows-6 bkpgrid:grid-cols-10 bkpgrid:w-full bkpgrid:h-full ">
          <div className="flex w-full  items-center bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10">
            <div className="w-full">
              <div className="max-w-sm rounded  shadow-lg animate-pulse">
                <div className="h-[400px] bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="flex w-full  items-center bkpgrid:row-start-2 bkpgrid:row-end-6 bkpgrid:col-start-6 bkpgrid:col-end-10">
            <div className="w-full">
              <div className="max-w-sm rounded  shadow-lg animate-pulse">
                <div className="h-[400px] bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
