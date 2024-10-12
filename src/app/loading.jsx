import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";

export default function Loading() {
  return (
    <Container>
      <Section>
        <div className="flex flex-col w-fit  bkpgrid:grid   bkpgrid:grid-rows-6 bkpgrid:grid-cols-10 bkpgrid:w-full bkpgrid:h-full ">
          <div className=" flex  items-center my-20 bkpgrid:my-0  min-h-[330px]   bkpgrid:row-start-2 bkpgrid:row-end-5 bkpgrid:col-start-2 bkpgrid:col-end-5">
            <div className="w-full">
              <div className="max-w-sm rounded  shadow-lg animate-pulse">
                <div className=" py-4">
                  <div className="h-8 bg-gray-300 w-2/3"></div>
                </div>
                <div className="h-48 bg-gray-300"></div>
                <div className=" pt-4 pb-2">
                  <div className="h-12 bg-gray-300 w-full mb-2 rounded-lg"></div>
                </div>
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
