
interface CardProps {
    seatType: string;
    format: string;
    baseFare: string;
    weekend: string;
}

export const CardComponent = ({ seatType, format, baseFare, weekend }: CardProps) => {
    return (
        <div className="bg-gray-50 rounded-lg p-3 flex justify-between items-center">
            <div>
                <div className="text-sm text-gray-600 mb-1">Seat Type</div>
                <div className="font-medium text-gray-900">{seatType}</div>
            </div>
            <div>
                <div className="text-sm text-gray-600 mb-1">Format</div>
                <div className="font-medium text-gray-900">{format}</div>
            </div>
            <div>
                <div className="text-sm text-gray-600 mb-1">Base Fare</div>
                <div className="font-bold text-orange-600">{baseFare}</div>
            </div>
            <div>
                <div className="text-sm text-gray-600 mb-1">Weekend</div>
                <div className="font-medium text-gray-900">{weekend}</div>
            </div>
        </div>
    );
};